import './index.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Background from './components/Background'
import ScaleBar from './components/ScaleBar';

function App() {
  return (
    <div className='font-sans'>
      <Background />
      <Header />
      <div className='container mx-auto relative'>
        <h1 className='text-2xl m-2 font-semibold text-slate-900 dark:text-slate-50'>
          Visual Analog Scale
        </h1>
        <ScaleBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
