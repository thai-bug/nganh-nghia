import { Link } from "@tanstack/react-router";

const Round1Info = () => {
  return (
    <div className="grid place-items-center my-8">
      <div className=" bg-gradient-to-b from-gray-100 to-gray-200 p-4 rounded-3xl h-[65vh] ">
        <div className="flex justify-between gap-8 items-center h-[55vh]">
          <div className="w-1/3">
            <div className="font-semibold text-xl text-center ">
              Vòng đấu số 1
            </div>
            <div className="font-bold text-2xl text-blue-600 text-center ">
              CHẮT CHILL - CHILL CHẮC
            </div>
          </div>

          <div className="w-2/3">
            <div className="text-justify font-semibold text-xl">
              Luật vòng đấu:
            </div>
            <ol className="list-decimal list-inside gap-2 text-lg">
              <li>Có 6 câu hỏi trong vòng đấu</li>
              <li>
                Mỗi câu hỏi trong vòng đấu có nội dung{" "}
                <span className="font-semibold">"Là ai?"</span>
              </li>
              <li>
                Có 10 từ khóa liên quan đến nhân vật trong câu hỏi lần lượt xuất
                hiện.
              </li>
              <li>Khi 1 từ khóa xuất hiện, có 2 giây tồn tại</li>
              <li>
                Người chơi có thể nhanh tay trả lời giành lấy lá cờ để trả lời
                câu hỏi
              </li>
              <li>
                Khi người chơi trả lời chính xác, đội người chơi sẽ được cộng
                điểm
              </li>
              <li>
                Số lượng từ khóa xuất hiện càng nhiều, điểm của hỏi càng bị
                giảm.
              </li>
              <li>
                Khi người chơi trả lời sai, sẽ không còn quyền trả lời câu hỏi
                hiện tại
              </li>
              <li>
                Nếu toàn bộ từ khóa không được trả lời, các thành viên phía dưới
                có thể giành quyền trả lời.
              </li>
              <li>
                Điểm của thành viên phía dưới trả lời sẽ phải chia đôi với điểm
                còn lại của câu hỏi
              </li>
            </ol>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to="/round1"
            // search={{ game: 1 }}
            search={{
              game: true,
            }}
            className="inline-block px-6 py-3 text-white font-bold bg-green-500 rounded-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl no-underline "
          >
            Tiền vào vòng đấu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Round1Info;
