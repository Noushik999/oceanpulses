import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { forecastData } from '../data/mock';
import { TrendingUp, TrendingDown, Gauge, Thermometer, Droplets, Calendar } from 'lucide-react';

export default function Forecast() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Ocean Forecast</h1>
        <p className="text-slate-400">Predictive analytics and trend analysis</p>
      </div>

      {/* Global Forecasts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              Sea Level Rise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-white">
              {forecastData.global.seaLevelRise.value}
              <span className="text-lg text-slate-400 ml-1">{forecastData.global.seaLevelRise.unit}</span>
            </p>
            <p className="text-sm text-amber-400 mt-2">{forecastData.global.seaLevelRise.forecast}</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-orange-400" />
              Ocean Warming
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-white">
              +{forecastData.global.oceanWarming.value}
              <span className="text-lg text-slate-400 ml-1">{forecastData.global.oceanWarming.unit}</span>
            </p>
            <p className="text-sm text-rose-400 mt-2">{forecastData.global.oceanWarming.forecast}</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2">
              <Droplets className="h-4 w-4 text-teal-400" />
              Ocean Acidification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-white">
              {forecastData.global.acidification.value}
              <span className="text-lg text-slate-400 ml-1">{forecastData.global.acidification.unit}</span>
            </p>
            <p className="text-sm text-rose-400 mt-2">{forecastData.global.acidification.forecast}</p>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Forecast */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-cyan-400" />
            7-Day Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-3">
            {forecastData.weekly.map((day, idx) => (
              <div 
                key={idx} 
                className="text-center p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
              >
                <p className="text-slate-400 text-sm font-medium mb-3">{day.day}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-white font-bold text-lg">{day.temp}°</p>
                    <p className="text-slate-500 text-xs">Temp</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold">{day.waves}m</p>
                    <p className="text-slate-500 text-xs">Waves</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
