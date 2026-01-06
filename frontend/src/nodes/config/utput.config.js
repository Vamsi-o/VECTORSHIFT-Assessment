import { Position } from 'reactflow';

export const outputConfig = {
  label: 'Output',
  
  handles: [
    {
      type: 'target',
      position: Position.Left,
      id: (id) => `${id}-value`
    }
  ],
  
  fields: [
    {
      name: 'outputName',
      label: 'Name:',
      type: 'text',
      defaultValue: (id) => id.replace('customOutput-', 'output_')
    },
    {
      name: 'outputType',
      label: 'Type:',
      type: 'select',
      options: ['Text', 'File'],
      defaultValue: 'Text'
    }
  ]
};
