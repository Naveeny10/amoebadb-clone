import React from "react";
import GeneCard from "./GeneCard";

const GeneCardList = ({ genes }) => {
  if (!genes || genes.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-6">
        No gene results to display.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-6 py-4">
      {genes.map((gene) => (
        <GeneCard key={gene._id} gene={gene} />
      ))}
    </div>
  );
};

export default GeneCardList;
