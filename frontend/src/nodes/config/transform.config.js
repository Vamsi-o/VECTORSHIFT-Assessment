import { Position } from 'reactflow';

export const transformConfig = {
  label: 'Transform',
  
  handles: [
    {
      type: 'target',
      position: Position.Left,
      id: (id) => `${id}-input`
    },
    {
      type: 'source',
      position: Position.Right,
      id: (id) => `${id}-output`
    }
  ],
  
  fields: [
    {
      name: 'operation',
      label: 'Operation:',
      type: 'select',
      options: ['uppercase', 'lowercase', 'reverse', 'trim'],
      defaultValue: 'uppercase'
    }
  ]
};
