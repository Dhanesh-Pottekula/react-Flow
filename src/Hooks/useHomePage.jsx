import { useCallback, useState } from "react";
import { useNodesState, useEdgesState, addEdge } from "reactflow";
import { initialEdges, initialNodes, nodeTypes } from "../constants";
function useHomePage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
const [selectedNode,setSelectedNode]=useState("")
const [inputMessage,setInputMessage]=useState('')
  const onConnect = useCallback(
    (Connection) => {
      const edge = {
        ...Connection,
        id: `${Connection.source}-${Connection.target}`,
      };
      console.log(edge);
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  const onDrop = (event) => {
    console.log(event)
    const reactFlowBounds = event.target.getBoundingClientRect();
    const clientX = event.clientX - reactFlowBounds.left;
    const clientY = event.clientY - reactFlowBounds.top;
    console.log('Drop position:', clientX, clientY);
    
    const newNode = {
      id: `${nodes.length + 1}`,
      type: nodeTypes.text,
      position: { x: clientX, y: clientY },
      data: { Text: 'New Node' },
      type:nodeTypes.text
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };
  
  const selectNode =(e,nodeinfo)=>{
    console.log(nodeinfo)
    setNodes((prevNodes) =>
        prevNodes.map((node) =>
          node.id === nodeinfo.id ? { ...node, selected: true } : node
        )
      );
    setSelectedNode(nodeinfo?.id)
  }

  const onHandleInput=(e)=>{
    const text = e.target.value;
    setInputMessage(text)

  }
const editNode=()=>{
    setNodes((prevNodes) =>
        prevNodes.map((node) =>
          node.id === selectedNode ? { ...node, data: {Text:inputMessage},selected:false } : node
        )
      );
    setSelectedNode("")
    setInputMessage('')
}

  return {
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
  };
}

export default useHomePage;
