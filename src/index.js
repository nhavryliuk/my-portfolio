import React from 'react';
import ReactDOM from 'react-dom/client';  // Для React 18 потрібно імпортувати з 'react-dom/client'
import App from './App';
import './index.css';  // Це для підключення стилів, якщо вони є

// Створюємо корінь для додатку та рендеримо компонент
const root = ReactDOM.createRoot(document.getElementById('root')); // Створення кореня
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
