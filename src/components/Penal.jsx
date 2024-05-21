import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Penal({
  onDrop,
  selectedNode,
  editNode,
  onHandleInput,
  checkEmptynodes,
  onClearSelection,
}) {
  return (
    <>
      <div className="mb-4">
        <button
          className="px-8 py-1 rounded-md bg-blue-500 text-white"
          onClick={checkEmptynodes}
        >
          Save Content
        </button>
      </div>
      <div className="border border-gray-300 p-4 rounded-lg min-h-screen w-full relative pt-16">
        <div className="absolute top-4 right-3">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            onClick={() => onClearSelection()} // Replace with your back button logic
          >
            <FaArrowLeft className="text-gray-600" />
          </button>
        </div>
        {!selectedNode && <CreateDragButton onDrop={onDrop} />}
        {selectedNode && (
          <EditMessage onHandleInput={onHandleInput} editNode={editNode} />
        )}
      </div>
    </>
  );
}
export function EditMessage({ onHandleInput, editNode }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <span className="text-xl font-semibold text-gray-700 p-2 bg-gray-200 rounded-md shadow-sm px-4">
        Message Panel
      </span>
      <div className="w-full border border-gray-800" />
      <div className=" w-full flex ">

      <label
        htmlFor="messageInput"
        className="block text-lg font-medium text-gray-500 mb-2"
      >
         Text:
      </label>
      </div>
      <input
        type="text"
        id="messageInput"
        className=" border border-gray-300 rounded-md w-44 h-24"
        onChange={onHandleInput}
        placeholder=" Enter the Message"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded"
        onClick={editNode}
      >
        Send
      </button>
    </div>
  );
}
export function CreateDragButton({ onDrop }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <span className="text-xl font-semibold text-gray-700 p-2 bg-gray-200 rounded-md shadow-sm px-4">
        Nodes Panel
      </span>
      <div className=" w-full border border-gray-800" />
      <div
        draggable
        onDragEnd={(e) => onDrop(e)}
        className="p-2 border border-gray-300 rounded-md bg-gray-100 mb-4 h-24 w-40 flex justify-center items-center text-center"
      >
        <p>Create Node</p>
      </div>
    </div>
  );
}
