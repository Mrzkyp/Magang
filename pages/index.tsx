import { Button, Card, CardBody } from "@roketid/windmill-react-ui";
import Display from "example/components/Display/display";
import React, { useState } from "react";

const Dashboard = () => {
  return (
    <>
      <Display />
    </>
  );
};

// interface QueueItem {
//   id: number;
//   name: string;
// }

// const Dashboard: React.FC = () => {
//   const [queue, setQueue] = useState<QueueItem[]>([]);
//   const [nextNumber, setNextNumber] = useState(1);

//   const handleAddToQueue = () => {
//     const newItem: QueueItem = {
//       id: nextNumber,
//       name: `Antrian-${nextNumber}`,
//     };
//     setQueue((prevQueue) => [...prevQueue, newItem]);
//     setNextNumber(nextNumber + 1);
//   };

//   const handleNextQueue = () => {
//     setQueue((prevQueue) => prevQueue.slice(1));
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md mt-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">Loket Antrian</h1>
//       <div className="flex justify-center space-x-4 mb-4">
//         <button
//           className="px-4 py-2 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600"
//           onClick={handleAddToQueue}
//         >
//           Ambil Antrian
//         </button>
//         <button
//           className="px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-blue-600"
//           onClick={handleNextQueue}
//           disabled={queue.length === 0}
//         >
//           Panggil Antrian Berikutnya
//         </button>
//       </div>
//       <div>
//         <h2 className="text-lg font-semibold mb-2">Antrian Saat Ini:</h2>
//         {queue.length === 0 ? (
//           <p className="italic">Tidak ada antrian saat ini.</p>
//         ) : (
//           <div>
//             <p className="mb-2">Antrian sedang dipanggil:</p>
//             <h3 className="text-xl font-bold mb-4">{queue[0].name}</h3>
//             <p className="mb-2">Daftar antrian:</p>
//             <ul>
//               {queue.map((item) => (
//                 <li key={item.id} className="mb-1">
//                   {item.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

export default Dashboard;
