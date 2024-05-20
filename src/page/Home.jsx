import React, { useMemo } from "react";

import { nodeTypes } from "../constants";
import CustomTextNode from "../components/CustomTextNode";
import ReactFlow, { Background, Controls } from "reactflow";
import useHomePage from "../Hooks/useHomePage";
import Penal from "../components/Penal";

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
  } = useHomePage();

  const customNodeTypes = useMemo(
    () => ({
      [nodeTypes.text]: CustomTextNode,
    }),
    []
  );

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: "100",
          }}
        >
          <Penal
            onDrop={onDrop}
            selectedNode={selectedNode}
            editNode={editNode}
            onHandleInput={onHandleInput}
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
        >
          <Background color="grey" />

          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}
