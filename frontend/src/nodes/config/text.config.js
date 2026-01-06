export const textConfig = {
  label: 'Text',
  
  handles: [
    {
      type: 'source',
      position: { x: 0, y: 0.5 },
      id: (id) => `${id}-output`
    }
  ],
  
  fields: [
    {
      name: 'textContent',
      label: 'Text:',
      type: 'textarea',
      defaultValue: 'Enter text here...'
    }
  ]
};
