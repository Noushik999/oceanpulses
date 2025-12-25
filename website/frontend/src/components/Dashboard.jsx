import React from 'react';
import OceanCard from './OceanCard';
import { oceanData } from '../data/mock';
import { Activity, Globe2, Thermometer, Waves } from 'lucide-react';
import { Card, CardContent } from './ui/card';

function GlobalStat({ icon: Icon, label, value, color }) {
  return (
    <Card className="bg-slate-800/40 border-slate-700/40 hover:border-slate-600/50 transition-all duration-300">
      <CardContent className="p-5 flex items-center gap-4">
        <div 
          className="p-3.5 rounded-xl"
          style={{ backgroundColor: `${color}18` }}
        >
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-wider font-medium">{label}</p>
          <p className="text-white text-2xl font-bold mt-0.5">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const avgTemp = (oceanData.reduce((acc, o) => acc + o.stats.temperature.value, 0) / oceanData.length).toFixed(1);
  const avgWaves = (oceanData.reduce((acc, o) => acc + o.stats.waveHeight.value, 0) / oceanData.length).toFixed(1);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white tracking-tight">Ocean Dashboard</h1>
        <p className="text-slate-400 text-lg">Real-time monitoring of global ocean conditions</p>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <GlobalStat 
          icon={Globe2} 
          label="Oceans Monitored" 
          value="5" 
          color="#0EA5E9" 
        />
        <GlobalStat 
          icon={Thermometer} 
          label="Avg Temperature" 
          value={`${avgTemp}°C`} 
          color="#F97316" 
        />
        <GlobalStat 
          icon={Waves} 
          label="Avg Wave Height" 
          value={`${avgWaves}m`} 
          color="#14B8A6" 
        />
        <GlobalStat 
          icon={Activity} 
          label="Active Sensors" 
          value="2,847" 
          color="#8B5CF6" 
        />
      </div>

      {/* Ocean Cards Grid */}
      <div className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-200">Ocean Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {oceanData.map((ocean) => (
            <OceanCard key={ocean.id} ocean={ocean} />
          ))}
        </div>
      </div>
    </div>
  );
}
