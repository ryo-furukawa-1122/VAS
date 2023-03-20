import './index.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Background from './components/Background'
import ScaleBar from './components/ScaleBar';
import Settings from './components/Settings';

function App() {
  const [max, setMax] = useState(100);
  const [min, setMin] = useState(0);
  return (
    <div className='font-sans'>
      <Background />
      <Header />
      <div className='container mx-auto relative'>
        <h1 className='text-2xl m-2 font-semibold text-slate-900 dark:text-slate-50'>
          Visual Analog Scale
        </h1>
        <Settings maxState={[max, setMax]} minState={[min, setMin]} />
        <ScaleBar maxState={[max, setMax]} minState={[min, setMin]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
