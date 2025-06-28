import React from 'react';

const DebugInfo = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '10px', 
      borderRadius: '5px', 
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <strong>Debug Info:</strong><br/>
      Backend URL: {backendUrl || 'NOT SET'}<br/>
      Environment: {process.env.NODE_ENV}<br/>
      <button 
        onClick={() => window.location.reload()} 
        style={{ marginTop: '5px', padding: '2px 5px' }}
      >
        Reload
      </button>
    </div>
  );
};

export default DebugInfo; 