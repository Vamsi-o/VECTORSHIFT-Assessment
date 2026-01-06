import { Position } from 'reactflow';

export const llmConfig = {
  label: 'LLM',
  
  handles: [
    {
      type: 'target',
      position: Position.Left,
      id: (id) => `${id}-system`
    },
    {
      type: 'target',
      position: Position.Left,
      id: (id) => `${id}-prompt`
    },
    {
      type: 'source',
      position: Position.Right,
      id: (id) => `${id}-response`
    }
  ],
  
  fields: [
    {
      name: 'modelName',
      label: 'Model:',
      type: 'text',
      defaultValue: 'gpt-3.5-turbo'
    }
  ]
};
