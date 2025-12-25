import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { captainMessages } from '../data/mock';
import { Anchor, MessageSquare, AlertTriangle, RefreshCw, CheckCircle2, Radio } from 'lucide-react';

const messageConfig = {
  status: { icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  alert: { icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  update: { icon: RefreshCw, color: 'text-cyan-400', bg: 'bg-cyan-500/10' }
};

export default function CaptainOnDeck() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Captain on Deck</h1>
        <p className="text-slate-400">Command center and system communications</p>
      </div>

      {/* Status Panel */}
      <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-cyan-500/10">
              <Anchor className="h-10 w-10 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-1">System Status: Operational</h2>
              <p className="text-slate-400">All monitoring stations reporting nominal data</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-medium">Online</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-white">98.5%</p>
            <p className="text-slate-400 text-sm">Uptime</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-white">2,847</p>
            <p className="text-slate-400 text-sm">Active Sensors</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-white">156</p>
            <p className="text-slate-400 text-sm">Data Points/sec</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-white">23ms</p>
            <p className="text-slate-400 text-sm">Avg Latency</p>
          </CardContent>
        </Card>
      </div>

      {/* Communications Log */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Radio className="h-5 w-5 text-cyan-400" />
          Communications Log
        </h2>
        <div className="space-y-3">
          {captainMessages.map((msg) => {
            const config = messageConfig[msg.type];
            const Icon = config.icon;
            const timestamp = new Date(msg.timestamp).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            });

            return (
              <Card 
                key={msg.id} 
                className="bg-slate-800/30 border-slate-700/30 hover:bg-slate-800/50 transition-all"
              >
                <CardContent className="p-4 flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${config.bg}`}>
                    <Icon className={`h-4 w-4 ${config.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{msg.message}</p>
                    <p className="text-slate-500 text-xs mt-1">{timestamp}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
