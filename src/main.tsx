import {createRoot} from 'react-dom/client';
import Clarity from '@microsoft/clarity';
import App from './App.tsx';
import './index.css';

Clarity.init('zf7zjfn4xf');

createRoot(document.getElementById('root')!).render(<App />);
