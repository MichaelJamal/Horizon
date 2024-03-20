import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AppLayout from './components/AppLayout';
import FaqPage from './components/FaqPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import AboutUs from './components/AboutPage';
import IntermodalServices from './components/Intermodal';
import TrackingNumber from './components/TrackingNumber';
import BlogPage2 from './components/BlogPage2';
import TermsAndConditions from './components/TermsAndConditions';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/blogpage2" element={<BlogPage2 />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/aboutpage" element={<AboutUs />} />
          <Route path="/inter" element={<IntermodalServices />} />
          <Route path="/track" element={<TrackingNumber />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

