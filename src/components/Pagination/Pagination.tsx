import React from "react";

interface paginationPropsType {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ pageNumber, setPageNumber }: paginationPropsType) => {
  const pagN = 2000 / 50;
  const handleonClickedPageNumber = (action: "+" | "-") => {
    if (action === "+") {
      setPageNumber((prev: number) => prev + 1);
      if (pageNumber >= pagN) {
        setPageNumber(1);
      }
    } else {
      setPageNumber((prev: number) => prev - 1);
      if (pageNumber <= 1) {
        setPageNumber(pagN);
      }
    }
  };
  return (
    <div className="flex gap-x-4 justify-center">
      <button
        onClick={() => {
          if (pageNumber - 10 < 1) {
            setPageNumber(1);
          } else {
            setPageNumber((prev) => prev - 10);
          }
        }}
      >
        {"<<<"}
      </button>
      <button
        onClick={() => {
          handleonClickedPageNumber("-");
        }}
      >
        dec
      </button>
      <div className="flex gap-x-2 ">
        {Array.from({ length: pagN }, (_, i) => i + 1).map((i) => (
          <button
            onClick={() => {
              setPageNumber(i);
            }}
            className={`${pageNumber == i ? "text-red-200" : "text-slate-200"}`}
          >
            {i}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          handleonClickedPageNumber("+");
        }}
      >
        inc
      </button>{" "}
      <button
        onClick={() => {
          if (pageNumber + 10 >= pagN) {
            setPageNumber(Math.abs(pagN - pageNumber - 10));
          } else {
            setPageNumber((prev) => prev + 10);
          }
        }}
      >
        {">>>"}
      </button>
    </div>
  );
};

export default Pagination;
