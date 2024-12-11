import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateUserPage from './components/CreateUserPage';
import EventsPage from './pages/EventsPage';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/create-user">Criar Usuário</Link> | <Link to="/events">Eventos</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-user" element={<CreateUserPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  </Router>
);

export default App;