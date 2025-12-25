import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  TestTube, 
  Waves,
  TrendingUp,
  TrendingDown,
  Minus,
  Clock
} from 'lucide-react';

const statIcons = {
  temperature: Thermometer,
  salinity: Droplets,
  currentSpeed: Wind,
  ph: TestTube,
  waveHeight: Waves
};

const statLabels = {
  temperature: 'Temperature',
  salinity: 'Salinity',
  currentSpeed: 'Current Speed',
  ph: 'Acidity',
  waveHeight: 'Wave Height'
};

function TrendIcon({ trend }) {
  if (trend === 'up') return <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />;
  if (trend === 'down') return <TrendingDown className="h-3.5 w-3.5 text-rose-400" />;
  return <Minus className="h-3.5 w-3.5 text-slate-500" />;
}

function StatItem({ statKey, data, accentColor }) {
  const Icon = statIcons[statKey];
  const label = statLabels[statKey];
  
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-slate-700/40 last:border-0">
      <div className="flex items-center gap-3.5">
        <div 
          className="p-2.5 rounded-lg"
          style={{ backgroundColor: `${accentColor}12` }}
        >
          <Icon className="h-4 w-4" style={{ color: accentColor }} />
        </div>
        <span className="text-slate-400 text-sm font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="text-white font-semibold text-base">
          {data.value}<span className="text-slate-400 text-sm ml-0.5">{data.unit}</span>
        </span>
        <TrendIcon trend={data.trend} />
      </div>
    </div>
  );
}

export default function OceanCard({ ocean }) {
  const formattedTime = new Date(ocean.lastUpdated).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <Card className="bg-slate-800/40 border-slate-700/40 hover:bg-slate-800/60 hover:border-slate-600/50 transition-all duration-300 group">
      <CardHeader className="pb-4 pt-6 px-6">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-white mb-1.5 group-hover:text-cyan-300 transition-colors duration-300">
              {ocean.name}
            </CardTitle>
            <p className="text-slate-500 text-xs font-medium">{ocean.description}</p>
          </div>
          <div 
            className="h-3 w-3 rounded-full animate-pulse shadow-lg"
            style={{ backgroundColor: ocean.color, boxShadow: `0 0 12px ${ocean.color}40` }}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-0 px-6 pb-5">
        <div className="space-y-0">
          {Object.entries(ocean.stats).map(([key, data]) => (
            <StatItem 
              key={key} 
              statKey={key} 
              data={data} 
              accentColor={ocean.color}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-5 text-xs text-slate-500 font-medium">
          <Clock className="h-3.5 w-3.5" />
          <span>Updated {formattedTime}</span>
        </div>
      </CardContent>
    </Card>
  );
}
