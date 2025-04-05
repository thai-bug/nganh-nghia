import { RoundState } from "@/states/round.state";
import { IconCaretLeft, IconCaretRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { useRecoilValue } from "recoil";

const RoundInfo = () => {
  const roundInfo = useRecoilValue(RoundState);

  if (!roundInfo?.round) {
    return <></>;
  }

  return (
    <div className="rounded-lg bg-gray-100 p-4 text-center text-2xl font-bold my-2">
      <div className="flex justify-between items-center">
        <div>
          {roundInfo.round !== 1 && (
            <Link
              to={`/round${roundInfo.round - 1}`}
              className="text-sm flex gap-2 px-6 py-3 text-white font-bold bg-gray-300 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl no-underline "
            >
              <IconCaretLeft />
            </Link>
          )}
        </div>
        <div className="">
          Vòng đấu số {roundInfo?.round} - {roundInfo?.name}
        </div>
        <div>
          {roundInfo.round !== 3 && (
            <Link
              to={`/round${roundInfo.round + 1}`}
              className="text-sm flex gap-2 px-6 py-3 text-white font-bold bg-gray-300 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl no-underline "
            >
              <IconCaretRight />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoundInfo;
