/* eslint-disable @typescript-eslint/no-explicit-any */
import { Timer } from "@/components/Timer";
import { initQuestionGroups } from "@/data/round3.json";
import {
  IconCaretLeft,
  IconCaretRight,
  IconCheck,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { Button, Image } from "antd";
import { cloneDeep } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { SelectedPlayerState } from "@/states/player.state";
import classNames from "classnames";

const QuestionPackages = [
  {
    id: 1,
    time: 60,
    points: 100,
  },
  {
    id: 2,
    time: 80,
    points: 80,
  },
  {
    id: 3,
    time: 100,
    points: 60,
  },
];

const Round3 = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isSelectedStarOfHope, setIsSelectedStarOfHope] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState<any>();
  const selectedPlayer = useRecoilValue(SelectedPlayerState);
  const [currentQuestionGroupIndex, setCurrentQuestionGroupIndex] = useState(0);

  const [questionGroups, setQuestionGroups] =
    useState<any[]>(initQuestionGroups);

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = useMemo(() => {
    return questions[currentQuestionIndex];
  }, [currentQuestionIndex, questions]);

  const handleCheckAnswerQuestion = useCallback(() => {
    const tempQuestionGroups = cloneDeep(questionGroups);

    tempQuestionGroups[currentQuestionGroupIndex].initQuestions[
      currentQuestionIndex
    ].isAnswered = true;

    setQuestionGroups(tempQuestionGroups);
    if (currentQuestionIndex !== questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [
    currentQuestionGroupIndex,
    currentQuestionIndex,
    questionGroups,
    questions.length,
  ]);

  useEffect(() => {
    setQuestions(
      questionGroups[currentQuestionGroupIndex]?.initQuestions || []
    );
  }, [currentQuestionGroupIndex, questionGroups]);

  useEffect(() => {
    if (selectedPlayer) {
      setCurrentQuestionGroupIndex((selectedPlayer?.id || 1) - 1);
      setIsStarted(false);
      setSelectedPackage(undefined);
    }
  }, [selectedPlayer]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setIsSelectedStarOfHope(false);
  }, [currentQuestionGroupIndex]);

  return (
    <div className="">
      {!!selectedPlayer && (
        <div className="flex gap-2">
          <div className="flex my-5 gap-5">
            <Image src={selectedPlayer?.image} height={350} />
            <div>
              <div>Gói câu hỏi:</div>
              <div className="grid gap-2">
                {QuestionPackages?.map((item, index) => (
                  <div
                    key={index}
                    className={classNames(
                      "rounded-2xl border-2 border-gray-300 p-4 cursor-pointer",
                      {
                        "bg-green-300": selectedPackage?.id === item?.id,
                      }
                    )}
                    onClick={() => setSelectedPackage(item)}
                  >
                    <div>{item?.points} Điểm</div> <div>{item?.time} giây</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsSelectedStarOfHope(true)}
            className={classNames(
              "flex items-center justify-center cursor-pointer"
            )}
          >
            <img
              src="/star-of-hope.png"
              className={classNames("w-60  rounded-full object-fill", {
                "border-green-500 border-8": isSelectedStarOfHope,
              })}
            />
          </div>
        </div>
      )}
      <div className="flex justify-between ">
        <div className="grid gap-2 w-full">
          <div className="text-center">
            {!isStarted && (
              <Button
                disabled={!selectedPackage || !selectedPlayer}
                size="large"
                className="text-4xl"
                icon={<IconPlayerPlay />}
                onClick={() => setIsStarted(true)}
              />
            )}
            {isStarted && <Timer duration={selectedPackage?.time} />}
          </div>

          {!!selectedPlayer && !!selectedPackage && !!isStarted && (
            <>
              <div className="border-2 rounded-lg border-gray-300 p-4 w-full">
                <div className="text-2xl">
                  Câu số {currentQuestion?.id}: {currentQuestion?.question}
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                  disabled={currentQuestionIndex === 0}
                  icon={<IconCaretLeft />}
                  size="large"
                />

                {isStarted && (
                  <Button
                    onClick={handleCheckAnswerQuestion}
                    disabled={currentQuestion?.isAnswered}
                    icon={<IconCheck />}
                    size="large"
                    className="!text-green-500 !border-green-500"
                  />
                )}

                <div>
                  <Button
                    onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                    icon={<IconCaretRight />}
                    disabled={currentQuestionIndex === questions.length - 1}
                    size="large"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Round3;
