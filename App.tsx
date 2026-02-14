import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 font-sans text-white flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;