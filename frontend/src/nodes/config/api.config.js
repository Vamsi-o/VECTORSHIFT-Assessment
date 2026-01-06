import { Position } from 'reactflow';

export const apiConfig = {
  label: 'API',
  
  handles: [
    {
      type: 'target',
      position: Position.Left,
      id: (id) => `${id}-input`
    },
    {
      type: 'source',
      position: Position.Right,
      id: (id) => `${id}-response`
    }
  ],
  
  fields: [
    {
      name: 'url',
      label: 'URL:',
      type: 'text',
      defaultValue: 'https://api.example.com'
    },
    {
      name: 'method',
      label: 'Method:',
      type: 'select',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      defaultValue: 'GET'
    }
  ]
};
