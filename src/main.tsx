import 'modern-normalize/modern-normalize.css';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './global.css';

createRoot(document.getElementById('root') as HTMLDivElement).render(<App />);
