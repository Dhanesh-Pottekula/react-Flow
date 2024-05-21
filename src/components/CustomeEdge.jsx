import React from 'react';
import { getBezierPath, EdgeText } from 'reactflow';

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={{ ...style, stroke: 'black' }}
        className="react-flow__edge-path stroke-2"
        d={edgePath}
        markerEnd={markerEnd}
      />
      {data?.Text && (
        <EdgeText
          x={labelX}
          y={labelY}
          label={data.Text}
          labelStyle={{ fill: 'black', fontWeight: 'bold' }}
          labelBgPadding={[8, 4]}
          labelBgBorderRadius={4}
          labelBgStyle={{ fill: '#fff', opacity: 0.75 }}
        />
      )}
    </>
  );
};

export default CustomEdge;
