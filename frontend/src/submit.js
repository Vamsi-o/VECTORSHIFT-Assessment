import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore(state => ({
    nodes: state.nodes,
    edges: state.edges
  }));

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges })
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(`✅ Pipeline is valid!\n\n📊 Nodes: ${data.num_nodes}\n🔗 Edges: ${data.num_edges}\n✔️ Is DAG: ${data.is_dag}`);
      } else {
        alert(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ Failed to connect to backend: ${error.message}`);
    }
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px 24px',
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      boxShadow: '0 -1px 3px 0 rgba(0, 0, 0, 0.05)',
      position: 'sticky',
      bottom: 0,
      zIndex: 10
    }}>
      <button
        type="button"
        onClick={handleSubmit}
        style={{
          padding: '12px 32px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          background: '#2563EB',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          letterSpacing: '0.3px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#1D4ED8';
          e.target.style.transform = 'translateY(-1px)';
          e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#2563EB';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};
