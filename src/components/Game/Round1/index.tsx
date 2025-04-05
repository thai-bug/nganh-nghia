import { useCallback, useEffect, useMemo, useState } from "react";
import { Timer } from "../../Timer";
import { questions } from "@/data/round1.json";
import { IconClockPause, IconPlayerPlay } from "@tabler/icons-react";

const duration = 2.5;

export const Round1 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedQuestion, setSelectedQuestion] = useState<{
    hashtags: string[];
    result: string;
    image: string;
    maxPoints: number;
    stepPoints: number;
  }>();

  const [hashtags, setHashtags] = useState<string[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const remainPoints = useMemo(() => {
    return (
      (selectedQuestion?.maxPoints || 0) -
      currentIndex * (selectedQuestion?.stepPoints || 0)
    );
  }, [currentIndex, selectedQuestion?.maxPoints, selectedQuestion?.stepPoints]);

  const handlePrev = useCallback(() => {
    setSelectedQuestion(
      questions[currentQuestionIndex === 0 ? 0 : currentQuestionIndex - 1]
    );
    setIsAutoPlaying(false);
    setCurrentIndex(0);
    setShowResult(false);
  }, [currentQuestionIndex]);

  useEffect(() => {
    setHashtags(selectedQuestion?.hashtags || []);
  }, [selectedQuestion]);

  useEffect(() => {
    setSelectedQuestion(questions[currentQuestionIndex]);
    setIsAutoPlaying(false);
    setCurrentIndex(0);
    setShowResult(false);
  }, [currentQuestionIndex]);

  // Tự động chuyển hashtag sau 5s
  useEffect(() => {
    if (isPaused) return;
    if (!isAutoPlaying || currentIndex >= hashtags.length - 1) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [currentIndex, hashtags.length, isAutoPlaying, isPaused]);

  return (
    <div className="flex flex-col justify-between h-[calc(100vh-28%)]">
      <div className="h-full">
        <div className="text-4xl font-bold text-center my-4">
          Câu số {currentQuestionIndex + 1} | {remainPoints} điểm
        </div>
        <>
          {!isAutoPlaying && (
            <div className="flex justify-center items-center h-full">
              <button
                className="flex gap-2 cursor-pointer px-6 py-3 text-white font-bold bg-green-500 rounded-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl no-underline "
                onClick={() => {
                  setIsAutoPlaying(true);
                  setIsPaused(false);
                }}
              >
                <IconPlayerPlay />
                Bắt đầu
              </button>
            </div>
          )}

          {isAutoPlaying && (
            <>
              <Timer duration={duration} key={currentIndex} paused={isPaused} />

              <div className="text-4xl font-bold text-center  italic my-8">
                #{hashtags[currentIndex]}
              </div>

              {showResult && (
                <div className="text-center text-2xl font-bold ">
                  <div className="flex justify-center">
                    <img
                      src={selectedQuestion?.image}
                      className="rounded h-[480px]"
                    />
                  </div>
                  <div> {selectedQuestion?.result}</div>
                </div>
              )}
            </>
          )}
        </>
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          onClickCapture={() => setCurrentQuestionIndex((prev) => prev - 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer disabled:opacity-50"
        >
          Quay lại
        </button>
        {isAutoPlaying && (
          <>
            {currentIndex !== hashtags.length - 1 &&
              !showResult &&
              !isPaused && (
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => setIsPaused(true)}
                    className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl flex gap-2"
                  >
                    <IconClockPause />
                    Tạm dừng
                  </button>
                </div>
              )}
            {currentIndex !== hashtags.length - 1 &&
              !showResult &&
              isPaused && (
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => setIsPaused(false)}
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg text-xl flex gap-2"
                  >
                    <IconPlayerPlay />
                    Tiếp tục
                  </button>
                </div>
              )}
            {currentIndex === hashtags.length - 1 && !showResult && (
              <div className="text-center">
                <button
                  onClick={() => setShowResult(true)}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl"
                >
                  Hiện kết quả
                </button>
              </div>
            )}
          </>
        )}

        <button
          disabled={currentQuestionIndex === questions.length - 1}
          onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer disabled:opacity-50"
        >
          Tiếp theo
        </button>
      </div>
    </div>
  );
};
