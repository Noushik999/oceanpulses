import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { insightsData } from '../data/mock';
import { AlertTriangle, AlertCircle, Info, Clock, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';

const severityConfig = {
  critical: { icon: AlertTriangle, color: 'text-rose-400', bg: 'bg-rose-500/10', badge: 'bg-rose-500/20 text-rose-400' },
  warning: { icon: AlertCircle, color: 'text-amber-400', bg: 'bg-amber-500/10', badge: 'bg-amber-500/20 text-amber-400' },
  info: { icon: Info, color: 'text-cyan-400', bg: 'bg-cyan-500/10', badge: 'bg-cyan-500/20 text-cyan-400' }
};

export default function Insights() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Ocean Insights</h1>
        <p className="text-slate-400">AI-powered analysis and alerts</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-rose-500/10 border-rose-500/20">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-rose-400">1</p>
            <p className="text-rose-300/70 text-sm">Critical</p>
          </CardContent>
        </Card>
        <Card className="bg-amber-500/10 border-amber-500/20">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-amber-400">2</p>
            <p className="text-amber-300/70 text-sm">Warnings</p>
          </CardContent>
        </Card>
        <Card className="bg-cyan-500/10 border-cyan-500/20">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-cyan-400">1</p>
            <p className="text-cyan-300/70 text-sm">Informational</p>
          </CardContent>
        </Card>
      </div>

      {/* Insights List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-cyan-400" />
          Recent Insights
        </h2>
        
        {insightsData.map((insight) => {
          const config = severityConfig[insight.severity];
          const Icon = config.icon;
          const timestamp = new Date(insight.timestamp).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });

          return (
            <Card 
              key={insight.id} 
              className={`${config.bg} border-slate-700/30 hover:border-slate-600/50 transition-all cursor-pointer`}
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg ${config.bg}`}>
                    <Icon className={`h-5 w-5 ${config.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-semibold">{insight.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${config.badge}`}>
                        {insight.severity}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{insight.description}</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="h-3 w-3" />
                      {timestamp}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
