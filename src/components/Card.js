
// src/components/Card.js

// Ini adalah Functional Component
const Card = (props) => {
  return (
    <div className="p-4 border-2 border-gray-200 rounded-lg shadow-lg bg-white w-full max-w-sm m-2">
      <h3 className="text-xl font-bold text-blue-600">{props.nama}</h3>
      <p className="text-gray-600">NIM: {props.nim}</p>
      <p className="text-gray-500 text-sm mt-2">Angkatan: {props.angkatan}</p>
    </div>
  );
};

export default Card;

