import { useState, useEffect } from 'react';
import { Position, Handle } from 'reactflow';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data.text || '');
  const [variables, setVariables] = useState([]);
  const updateNodeData = useStore(state => state.updateNodeData);

  useEffect(() => {
    const regex = /\{\{\s*(\w+)\s*\}\}/g;
    const matches = [...text.matchAll(regex)];
    const foundVars = [...new Set(matches.map(match => match[1]))];
    setVariables(foundVars);
  }, [text]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    updateNodeData(id, { text: newText });
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      background: 'white',
      minWidth: '200px',
      position: 'relative'
    }}>
      <div style={{
        fontWeight: 'bold',
        marginBottom: '8px',
        fontSize: '12px',
        color: '#333'
      }}>
        Text
      </div>

      {variables.map((varName, index) => (
        <div key={varName}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${varName}`}
            style={{
              top: `${50 + (index * 30)}px`,
              width: '12px',
              height: '12px',
              background: '#3b82f6',
              border: '2px solid white',
              zIndex: 10
            }}
          />
          <div style={{
            position: 'absolute',
            left: '15px',
            top: `${48 + (index * 30)}px`,
            fontSize: '10px',
            color: '#3b82f6',
            fontWeight: 'bold',
            pointerEvents: 'none'
          }}>
            {varName}
          </div>
        </div>
      ))}

      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text... Use {{ variableName }} for variables"
        style={{
          width: '100%',
          minHeight: '80px',
          maxHeight: '200px',
          resize: 'vertical',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '12px',
          fontFamily: 'monospace',
          marginTop: variables.length > 0 ? `${variables.length * 15}px` : '0'
        }}
        rows={Math.min(10, Math.max(3, text.split('\n').length))}
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          width: '12px',
          height: '12px',
          background: '#10b981',
          border: '2px solid white'
        }}
      />
    </div>
  );
};
