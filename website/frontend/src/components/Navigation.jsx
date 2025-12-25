import React from 'react';
import { Button } from './ui/button';
import { 
  LayoutDashboard, 
  CloudSun, 
  Lightbulb, 
  FlaskConical, 
  Anchor,
  LogIn,
  Waves
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'forecast', label: 'Forecast', icon: CloudSun },
  { id: 'insights', label: 'Insights', icon: Lightbulb },
  { id: 'research', label: 'Research Lab', icon: FlaskConical },
  { id: 'captain', label: 'Captain on Deck', icon: Anchor },
];

export default function Navigation({ activeView, setActiveView }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
              <Waves className="h-6 w-6 text-cyan-400" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              OceanPulse
            </span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200 ease-out
                    ${isActive 
                      ? 'bg-cyan-500/15 text-cyan-400' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Sign In Button */}
          <Button
            onClick={() => setActiveView('signin')}
            variant={activeView === 'signin' ? 'default' : 'outline'}
            className={`
              flex items-center gap-2 transition-all duration-200
              ${activeView === 'signin'
                ? 'bg-cyan-600 hover:bg-cyan-700 text-white border-0'
                : 'border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500'
              }
            `}
          >
            <LogIn className="h-4 w-4" />
            Sign In
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-3 flex gap-2 overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={`mobile-${item.id}`}
                onClick={() => setActiveView(item.id)}
                className={`
                  flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap
                  transition-colors duration-200 flex-shrink-0
                  ${isActive 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                    : 'text-slate-400 hover:text-slate-200 bg-slate-800/30 hover:bg-slate-800/50'
                  }
                `}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
