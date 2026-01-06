import { Position } from 'reactflow';

export const mathConfig = {
  label: 'Math',
  
  handles: [
    {
      type: 'target',
      position: Position.Left,
      id: (id) => `${id}-a`,
      style: { top: '30%' }
    },
    {
      type: 'target',
      position: Position.Left,
      id: (id) => `${id}-b`,
      style: { top: '70%' }
    },
    {
      type: 'source',
      position: Position.Right,
      id: (id) => `${id}-result`
    }
  ],
  
  fields: [
    {
      name: 'operation',
      label: 'Operation:',
      type: 'select',
      options: ['add', 'subtract', 'multiply', 'divide'],
      defaultValue: 'add'
    }
  ]
};
