import { Position } from 'reactflow';

export const delayConfig = {
  label: 'Delay',
  
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
      name: 'seconds',
      label: 'Seconds:',
      type: 'text',
      defaultValue: '5'
    }
  ]
};
