import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AppLayout from './components/AppLayout';
import FaqPage from './components/FaqPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

