export const nodeTypes = { text: "message" };
export const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { Text: "1" },
    type: nodeTypes.text,
    selected:false,
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { Text: "2" },
    type: nodeTypes.text,
    selected:false,

  },
  {
    id: "3",
    position: { x: 0, y: 50 },
    data: { Text: "3" },
    type: nodeTypes.text,
    selected:false,

  },
];
export const initialEdges = [{ id: "1-2", source: "1", target: "2" }];
