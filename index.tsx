
import React from 'react';
import ReactDOM from 'react-dom/client';

console.log('GGPA: Script loaded, importing App...');

try {
  import('./App').then(({ default: App }) => {
    console.log('GGPA: App imported successfully');
    
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error("Could not find root element to mount to");
    }

    console.log('GGPA: Root element found, creating React root...');

    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    console.log('GGPA: React app rendered successfully');
  }).catch((error) => {
    console.error('GGPA: Failed to import App:', error);
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 40px; text-align: center; font-family: Inter, sans-serif;">
          <h1 style="color: #dc2626; margin-bottom: 16px;">Failed to Load Application</h1>
          <p style="color: #64748b; margin-bottom: 16px;">Error: ${error.message}</p>
          <pre style="background: #f1f5f9; padding: 16px; border-radius: 8px; text-align: left; overflow: auto;">${error.stack}</pre>
        </div>
      `;
    }
  });
} catch (error: any) {
  console.error('GGPA: Fatal error:', error);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 40px; text-align: center; font-family: Inter, sans-serif;">
        <h1 style="color: #dc2626; margin-bottom: 16px;">Fatal Error</h1>
        <p style="color: #64748b;">${error.message}</p>
      </div>
    `;
  }
}
