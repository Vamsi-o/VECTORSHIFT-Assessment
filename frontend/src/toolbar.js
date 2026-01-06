import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div style={{
      padding: '16px 24px',
      background: '#FFFFFF',
      borderBottom: '1px solid #E2E8F0',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
    }}>
      <h2 style={{
        color: '#0F172A',
        marginBottom: '14px',
        fontSize: '14px',
        fontWeight: '600',
        letterSpacing: '0.3px',
        textTransform: 'uppercase'
      }}>
        Node Library
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='api' label='API' />
        <DraggableNode type='transform' label='Transform' />
        <DraggableNode type='filter' label='Filter' />
        <DraggableNode type='delay' label='Delay' />
        <DraggableNode type='math' label='Math' />
      </div>
    </div>
  );
};
