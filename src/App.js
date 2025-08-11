import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import SocialShare from './components/SocialShare';
import { Toaster } from './components/ui/toaster';

const Home = () => {
  const [showShareDialog, setShowShareDialog] = useState(false);

  const handleShare = () => {
    setShowShareDialog(true);
  };

  return (
    <div className="min-h-screen bg-black">
      <Hero onShare={handleShare} />
      
      <SocialShare 
        isOpen={showShareDialog} 
        onClose={() => setShowShareDialog(false)} 
      />
      
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;