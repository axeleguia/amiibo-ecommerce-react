import LeftSvg from "@/assets/Left.svg";
import RightSvg from "@/assets/Right.svg";
import { ChangeEvent, FC } from "react";

interface PaginatorProps {
  page: number;
  limit: number;
  handleLimit: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleBackward: () => void;
  handleForward: () => void;
  classNames: string;
}

const btnClass = "bg-red-600 text-white p-4 rounded-full disabled:opacity-50";

export const Paginator: FC<PaginatorProps> = ({
  page,
  limit,
  handleLimit,
  handleBackward,
  handleForward,
  classNames,
}) => {
  return (
    <div className={`flex flex-row gap-4 items-center mb-4 ${classNames}`}>
      Paginas
      <select
        name="limitPerPage"
        defaultValue={limit}
        onChange={(e) => handleLimit(e)}
        className="px-4 py-2 rounded-xl"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
      <button
        id="backward-cta"
        onClick={handleBackward}
        className={btnClass}
        disabled={page === 1}
      >
        <img src={LeftSvg} alt="Anterior" className="w-[16px]" />
      </button>
      <p className="text-lg">{page}</p>
      <button id="forward-cta" onClick={handleForward} className={btnClass}>
        <img src={RightSvg} alt="Siguiente" className="w-[16px]" />
      </button>
    </div>
  );
};
