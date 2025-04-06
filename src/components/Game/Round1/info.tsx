import { Link } from "@tanstack/react-router";
import { info } from "@/data/round1.json";

const Round1Info = () => {
  return (
    <div className="grid place-items-center my-8">
      <div className=" bg-gradient-to-b from-gray-100 to-gray-200 p-4 rounded-3xl h-[70vh] ">
        <div className="flex justify-between gap-8 items-center h-[65vh]">
          <div className="w-1/3">
            <div className="font-semibold text-xl text-center ">
              Vòng đấu số 1
            </div>
            <div className="font-bold text-2xl text-blue-600 text-center ">
              {info.name}
            </div>
          </div>

          <div className="w-2/3">
            <div className="text-justify font-semibold text-xl">
              Luật vòng đấu:
            </div>
            <ol className="list-decimal list-inside gap-2 text-lg">
              {info?.rules?.map((rule, index) => {
                return <li key={index}>{rule}</li>;
              })}
            </ol>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to="/round1"
            search={{
              game: true,
            }}
            className="inline-block px-6 py-3 text-white font-bold bg-green-500 rounded-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl no-underline "
          >
            Tiến vào vòng đấu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Round1Info;
