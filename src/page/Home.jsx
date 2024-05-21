import React, { useMemo } from "react";

import { nodeTypes } from "../constants";
import CustomTextNode from "../components/CustomTextNode";
import ReactFlow, { Background, Controls } from "reactflow";
import useHomePage from "../Hooks/useHomePage";
import Penal from "../components/Penal";
import CustomEdge from "../components/CustomeEdge";

export default function Home() {
  const {
    onConnect,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onDrop,
    selectNode,
    selectedNode,
    editNode,
    onHandleInput,
    checkEmptynodes,
    onSaveError,
    onClearSelection,
  } = useHomePage();

  const customNodeTypes = useMemo(
    () => ({
      [nodeTypes.text]: CustomTextNode,
    }),
    []
  );
  const edgeTypes = {
    custom: CustomEdge,
  };
  

  return (
    <>
      <div className="w-full flex justify-center">
        {onSaveError.length > 0 && (
          <div className="px-4 py-2 rounded-md bg-orange-300 text-white">
            Unable to Save Content
          </div>
        )}
      </div>

      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: "100",
            backgroundColor:'white',
          width:'18%',
          minWidth:'200px'
          }}
        >
          <Penal
            onDrop={onDrop}
            selectedNode={selectedNode}
            editNode={editNode}
            onHandleInput={onHandleInput}
            checkEmptynodes={checkEmptynodes}
            onClearSelection={onClearSelection}
          />
        </div>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={customNodeTypes}
          fitView
          onDrop={onDrop}
          onNodeClick={(e, node) => selectNode(e, node)}
          minZoom={0.5}
          maxZoom={1}
          edgeTypes={edgeTypes}
        >
          <Background color="grey" />

          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}
