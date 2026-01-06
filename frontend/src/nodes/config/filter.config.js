import { Position } from 'reactflow';

export const filterConfig = {
  label: 'Filter',
  
  handles: [
    {
      type: 'target',
      position: Position.Left,
      id: (id) => `${id}-input`
    },
    {
      type: 'source',
      position: Position.Right,
      id: (id) => `${id}-true`,
      style: { top: '30%' }
    },
    {
      type: 'source',
      position: Position.Right,
      id: (id) => `${id}-false`,
      style: { top: '70%' }
    }
  ],
  
  fields: [
    {
      name: 'condition',
      label: 'Condition:',
      type: 'text',
      defaultValue: 'length > 10'
    }
  ]
};
