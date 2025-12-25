import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Forecast from './components/Forecast';
import Insights from './components/Insights';
import ResearchLab from './components/ResearchLab';
import CaptainOnDeck from './components/CaptainOnDeck';
import SignIn from './components/SignIn';

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'forecast':
        return <Forecast />;
      case 'insights':
        return <Insights />;
      case 'research':
        return <ResearchLab />;
      case 'captain':
        return <CaptainOnDeck />;
      case 'signin':
        return <SignIn />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App min-h-screen bg-slate-950">
      <Navigation activeView={activeView} setActiveView={setActiveView} />
      <main className="pt-24 md:pt-20 pb-16 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
