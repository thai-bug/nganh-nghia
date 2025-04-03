// export const Crossword = ({ puzzle, revealedCells, onCellClick }) => {
//   const isKeywordCell = (row, col) => puzzle.keywordColumn === col;

//   return (
//     <div className="grid gap-1">
//       {puzzle.grid.map((row, rowIndex) => (
//         <div key={rowIndex} className="flex gap-1">
//           {row.map((cell, colIndex) => (
//             <button
//               key={colIndex}
//               onClick={() => onCellClick(rowIndex, colIndex)}
//               className={`w-12 h-12 border flex items-center justify-center
//                 ${
//                   revealedCells.some(
//                     (c) => c.row === rowIndex && c.col === colIndex
//                   )
//                     ? "bg-white"
//                     : "bg-blue-100"
//                 }
//                 ${isKeywordCell(rowIndex, colIndex) ? "font-bold" : ""}`}
//             >
//               {revealedCells.some(
//                 (c) => c.row === rowIndex && c.col === colIndex
//               )
//                 ? cell.letter
//                 : ""}
//             </button>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

export const Crossword = () => {
  return <></>;
};
