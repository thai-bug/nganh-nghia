export const Round3 = () => {
  return <></>;
};

// export const Round3 = ({ packages, onComplete }) => {
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(0);

//   useEffect(() => {
//     if (selectedPackage && timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [selectedPackage, timeLeft]);

//   const selectPackage = (pkg) => {
//     setSelectedPackage(pkg);
//     setTimeLeft(pkg.time);
//     setCurrentQuestion(0);
//   };

//   return (
//     <div>
//       {!selectedPackage ? (
//         <div className="flex gap-4">
//           {packages.map((pkg, i) => (
//             <button
//               key={i}
//               onClick={() => selectPackage(pkg)}
//               className="bg-blue-500 text-white p-4 rounded"
//             >
//               Gói {i + 1} ({pkg.time}s)
//             </button>
//           ))}
//         </div>
//       ) : (
//         <div>
//           <div>Thời gian còn lại: {timeLeft}s</div>
//           <div>{selectedPackage.questions[currentQuestion].question}</div>
//           <button
//             onClick={() => setCurrentQuestion((prev) => prev + 1)}
//             disabled={currentQuestion >= selectedPackage.questions.length - 1}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
