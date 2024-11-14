import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StatePage from './pages/StatePage';
import CityPage from './pages/CityPage';
import PostJob from './pages/PostJob';
// Add these new imports
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
              <Route path="/post-job" element={<PostJob />} />
                            {/* Add these new routes */}
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
