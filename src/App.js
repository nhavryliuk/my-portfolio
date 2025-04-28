import React from 'react';           // Імпортуємо React
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // Імпортуємо Link
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';  // Імпортуємо MyFuture
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/about">Про мене</Link>
          <Link to="/my-city">Моє місто</Link>
          <Link to="/my-future">Мій розвиток</Link>
        </nav>
      </header>

      <div className="container">
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/my-city" element={<MyCity />} />
          <Route path="/my-future" element={<MyFuture />} /> {/* Додано шлях для MyFuture */}
        </Routes>
      </div>

      <footer>
        <p>Контакти: kn23-n.havryliuk@nubip.edu.ua</p>
        <p>Соцмережі: Facebook, Instagram, Telegram</p>
      </footer>
    </Router>
  );
}

export default App;
