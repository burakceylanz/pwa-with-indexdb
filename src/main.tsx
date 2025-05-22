import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { registerSW } from 'virtual:pwa-register';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

registerSW({
  onNeedRefresh() {
    if (confirm('Yeni bir güncelleme var. Sayfa yenilensin mi?')) {
      window.location.reload();
    }
  },
  onOfflineReady() {
    console.log('Uygulama offline çalışmaya hazır!');
  },
});
