import { initQuestions } from "@/data/round2.json";
import classnames from "classnames";
import { useEffect, useState } from "react";
import QuestionModal from "./QuestionModal";
import { cloneDeep } from "lodash";

export const Round2 = () => {
  const [questions, setQuestions] = useState<
    {
      id: number;
      keys: string;
      question: string;
      isShow: boolean;
    }[]
  >([]);

  const [selectedQuestion, setSelectedQuestion] = useState<{
    id: number;
    keys: string;
    question: string;
    isShow: boolean;
  }>();

  useEffect(() => {
    setQuestions(initQuestions);
  }, []);

  return (
    <>
      <div className="text-2xl text-center">
        Câu hỏi vòng đấu: <br />
        <span className="font-bold  italic text-4xl">
          Đây là nội dung của Năm Thánh 2025
        </span>
        <br />
        40 điểm
      </div>
      <div className="flex justify-center mt-8">
        <div>
          {questions.map((question) => {
            return (
              <div className="flex  gap-2" key={question.id}>
                <div
                  className="flex gap-1 cursor-pointer"
                  onClick={() => {
                    if (question.isShow) {
                      return;
                    }
                    setSelectedQuestion(question);
                  }}
                >
                  {question.keys?.split("")?.map((keyword, index) => {
                    return (
                      <div
                        className={classnames(
                          ` my-0.5 w-9 h-9 flex items-center justify-center text-2xl font semibold`,
                          {
                            "border-1": keyword !== " ",
                            "bg-yellow-200 text-gray-700": index === 9,
                          }
                        )}
                        key={index}
                      >
                        {keyword === " "
                          ? " "
                          : !question.isShow
                            ? "*"
                            : keyword}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {!!selectedQuestion && (
        <QuestionModal
          question={selectedQuestion}
          onConfirm={(id) => {
            setSelectedQuestion(undefined);
            const tempQuestions = cloneDeep(questions);
            const index = tempQuestions.findIndex(
              (question) => question.id === id
            );
            if (index !== -1) {
              tempQuestions[index].isShow = true;
              setQuestions(tempQuestions);
            }
          }}
        />
      )}
    </>
  );
};
