import { useEffect, useState } from "react";
import { Timer } from "./Timer";
import { questions } from "@/data/round1.json";
import { IconPlayerPlay } from "@tabler/icons-react";

const duration = 2.5;

export const Round1 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  console.log("🚀 ~ Round1 ~ currentQuestionIndex:", currentQuestionIndex);
  const [selectedQuestion, setSelectedQuestion] = useState<{
    hashtags: string[];
    result: string;
    image: string;
  }>();

  const [hashtags, setHashtags] = useState<string[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  console.log("🚀 ~ Round1 ~ isPaused:", isPaused);

  // Tự động chuyển hashtag sau 5s
  useEffect(() => {
    if (isPaused) return;
    if (!isAutoPlaying || currentIndex >= hashtags.length - 1) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [currentIndex, hashtags.length, isAutoPlaying, isPaused]);

  const handlePrev = () => {
    // setIsAutoPlaying(false);
    // setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    setHashtags(selectedQuestion?.hashtags || []);
  }, [selectedQuestion]);

  useEffect(() => {
    setSelectedQuestion(questions[currentQuestionIndex]);
    setIsAutoPlaying(false);
    setCurrentIndex(0);
    setShowResult(false);
  }, [currentQuestionIndex]);

  return (
    <div className="flex flex-col justify-between h-[calc(100vh-20%)]">
      <div className="h-full">
        Câu số {currentQuestionIndex + 1}
        <>
          {!isAutoPlaying && (
            <div className="flex justify-center items-center h-full">
              <button
                className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl flex gap-2"
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
              <div className="text-4xl font-bold text-center my-4 italic">
                #{hashtags[currentIndex]}
              </div>

              <Timer duration={duration} key={currentIndex} paused={isPaused} />

              {currentIndex !== hashtags.length - 1 &&
                !showResult &&
                !isPaused && (
                  <div className="text-center">
                    <button
                      onClick={() => setIsPaused(true)}
                      className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl"
                    >
                      Tạm dừng
                    </button>
                  </div>
                )}
              {currentIndex !== hashtags.length - 1 &&
                !showResult &&
                isPaused && (
                  <div className="text-center">
                    <button
                      onClick={() => setIsPaused(false)}
                      className="bg-orange-500 text-white px-6 py-3 rounded-lg text-xl"
                    >
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
              {showResult && (
                <div className="text-center text-2xl font-bold mt-4">
                  <div className="flex justify-center">
                    <img
                      src={selectedQuestion?.image}
                      className="rounded h-[750px]"
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
          disabled={currentIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Quay lại
        </button>

        <button
          onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer disabled:opacity-50"
        >
          Tiếp theo
        </button>
      </div>
    </div>
  );
};
