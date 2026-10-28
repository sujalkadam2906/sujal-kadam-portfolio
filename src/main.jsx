import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/schibsted-grotesk/index.css';
import '@fontsource/instrument-sans/index.css';
import '@fontsource/jetbrains-mono/index.css';
import './styles/globals.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
