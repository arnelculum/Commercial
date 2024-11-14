import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StatePage from './pages/StatePage';
import CityPage from './pages/CityPage';
import AddAgency from './pages/AddAgency';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/state/:stateId" element={<StatePage />} />
              <Route path="/state/:stateId/:citySlug" element={<CityPage />} />
              <Route path="/add-agency" element={<AddAgency />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/:slug" element={<ArticlePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
