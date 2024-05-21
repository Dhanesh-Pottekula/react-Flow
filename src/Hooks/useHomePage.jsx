import { useCallback, useState } from "react";
import { useNodesState, useEdgesState, addEdge } from "reactflow";
import { initialEdges, initialNodes, nodeTypes } from "../constants";
function useHomePage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
const [selectedNode,setSelectedNode]=useState("")
const [inputMessage,setInputMessage]=useState('')
const [onSaveError,setOnSaveError]=useState([])

const onConnect = useCallback(
  (connection) => {
    // Check if there is already an edge originating from the source
    const existingEdge = edges.find(
      (edge) => edge.source === connection.source
    );

    if (!existingEdge) {
      const edge = {
        ...connection,
        id: `${connection.source}-${connection.target}`,type: 'custom',
        data: { text: 'Custom Edge' },
        animated: true,
        style: { stroke: 'blue', strokeWidth: 2 },
      };
      setEdges((eds) => addEdge(edge, eds));
    } else {
      console.warn("Source node already has an outgoing edge.");
    }
  },
  [edges, setEdges]
);

const checkEmptynodes=()=>{
  const nodeIdsWithIncomingEdges = edges.map((edge) => edge.target);
  const nodesWithoutIncomingEdges = nodes.filter(
    (node) => !nodeIdsWithIncomingEdges.includes(node.id)
  );

  if (nodesWithoutIncomingEdges.length > 1) {
    setOnSaveError( nodesWithoutIncomingEdges);
  }else{
    setOnSaveError( []);
  }
}

  const onDrop = (event) => {
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

const onClearSelection=()=>{
  setNodes((prevNodes) =>
    prevNodes.map((node) =>
      node.selected ? { ...node, selected:false } : node
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
    checkEmptynodes,
    onSaveError,
    onClearSelection
  };
}

export default useHomePage;
