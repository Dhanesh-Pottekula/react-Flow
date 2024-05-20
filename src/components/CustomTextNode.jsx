import React from "react";
import "reactflow/dist/style.css";
import { Handle, Position } from "reactflow";
import { FaWhatsapp } from "react-icons/fa";

export default function CustomTextNode({ data, isConnectable,selected }) {
  
  return (
    <div className={`bg-green-500 shadow-xl rounded-lg ${selected ? 'border-2 border-sky-400' : ''} overflow-hidden w-48 h-24 flex flex-col justify-between`}>

      <div className="flex items-center justify-between px-2 py-1 bg-green-700">
        <Handle
          type="target"
          position={Position.Left}
          isConnectable={isConnectable}
        />
        <div className="flex items-center space-x-1">
          <FaWhatsapp className="text-xl text-white" />
          <span className="text-sm font-semibold text-white">Chat Bot</span>
        </div>
      </div>
      <div className="px-2 py-1 bg-white flex-1 flex flex-col justify-center">
        <p className="text-center text-gray-800 font-medium text-sm">
          {data.Text}
        </p>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
}
