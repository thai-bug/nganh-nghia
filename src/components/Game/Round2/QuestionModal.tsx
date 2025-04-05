import { FC } from "react";
import { Alert, Divider, Modal } from "antd";
import classNames from "classnames";
import { Timer } from "@/components/Timer";

interface QuestionModalProps {
  question?: {
    id: number;
    keys: string;
    question: string;
    isShow: boolean;
  };
  onConfirm: (id: number) => void;
}

const QuestionModal: FC<QuestionModalProps> = ({ question, onConfirm }) => {
  return (
    <Modal
      open={!!question}
      centered
      width={1200}
      title="Câu hỏi"
      cancelButtonProps={{
        style: { display: "none" },
      }}
      okText={"Xác nhận"}
      closable={false}
      onOk={() => {
        onConfirm(question?.id as number);
      }}
    >
      <Alert
        message={`Câu hỏi số ${question?.id}`}
        description={<div className="text-2xl">{question?.question}</div>}
        type="warning"
      />

      <div className="flex justify-center mt-12">
        <div className="flex gap-1 cursor-pointer">
          {question?.keys?.split("")?.map((keyword, index) => {
            if (keyword !== " ")
              return (
                <div
                  className={classNames(
                    ` my-0.5 w-12 h-12 flex items-center justify-center text-2xl font semibold`,
                    {
                      "border-1": keyword !== " ",
                      "bg-yellow-200 text-gray-700": index === 9,
                    }
                  )}
                  key={index}
                >
                  {"*"}
                </div>
              );
          })}
        </div>
      </div>
      <Divider />
      <Timer duration={20} paused={!question} />
    </Modal>
  );
};

export default QuestionModal;
