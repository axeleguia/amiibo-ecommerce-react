import { ChangeEvent, useState } from "react";

const usePaginator = (_page: number, _limit: number) => {
  const [page, setPage] = useState(_page);
  const [limit, setLimit] = useState(_limit);

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleLimit = (e: ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
  };

  return { page, limit, handleNext, handlePrevious, handleLimit };
};

export default usePaginator;
