import React from "react";

export default function Penal({ onDrop, selectedNode, editNode ,onHandleInput}) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg min-h-screen w-full">
      <div className="mb-4">
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
          Save Content
        </button>
      </div>
      {!selectedNode && (
        <div
          draggable
          onDragEnd={(e) => onDrop(e)}
          className="p-2 border border-gray-300 rounded-md bg-gray-100 mb-4 h-24 w-40 flex justify-center items-center text-center"
        >
          <p>Create Node</p>
        </div>
      )}
      {selectedNode && (
        <div className=" flex flex-col gap-2">
          <label htmlFor="messageInput" className="block mb-2">
            Enter the Message:
          </label>
          <input
            type="text"
            id="messageInput"
            className="px-4 py-2 border border-gray-300 rounded-md w-40 h-24"
            onChange={onHandleInput}
          />
          <button className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded" onClick={editNode}>Send</button>

        </div>
      )}
    </div>
  );
}
