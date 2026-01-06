export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        padding: '8px 16px',
        borderRadius: '6px',
        background: '#F8FAFC',
        border: '1px solid #E2E8F0',
        color: '#0F172A',
        fontSize: '13px',
        fontWeight: '500',
        transition: 'all 0.15s ease',
        userSelect: 'none'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#2563EB';
        e.currentTarget.style.color = '#FFFFFF';
        e.currentTarget.style.borderColor = '#2563EB';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#F8FAFC';
        e.currentTarget.style.color = '#0F172A';
        e.currentTarget.style.borderColor = '#E2E8F0';
      }}
      draggable
    >
      {label}
    </div>
  );
};
