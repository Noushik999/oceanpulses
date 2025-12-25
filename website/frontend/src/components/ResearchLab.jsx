import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { researchData } from '../data/mock';
import { FlaskConical, User, CheckCircle2, Clock, BarChart3 } from 'lucide-react';
import { Progress } from './ui/progress';

const statusConfig = {
  active: { color: 'text-cyan-400', bg: 'bg-cyan-500/20', label: 'Active' },
  completed: { color: 'text-emerald-400', bg: 'bg-emerald-500/20', label: 'Completed' },
  paused: { color: 'text-amber-400', bg: 'bg-amber-500/20', label: 'Paused' }
};

export default function ResearchLab() {
  const activeProjects = researchData.filter(p => p.status === 'active').length;
  const completedProjects = researchData.filter(p => p.status === 'completed').length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Research Lab</h1>
        <p className="text-slate-400">Ongoing oceanographic research projects</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10">
              <FlaskConical className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{researchData.length}</p>
              <p className="text-slate-400 text-xs">Total Projects</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10">
              <Clock className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{activeProjects}</p>
              <p className="text-slate-400 text-xs">In Progress</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-violet-500/10">
              <CheckCircle2 className="h-5 w-5 text-violet-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{completedProjects}</p>
              <p className="text-slate-400 text-xs">Completed</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10">
              <User className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">12</p>
              <p className="text-slate-400 text-xs">Researchers</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-cyan-400" />
          Active Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchData.map((project) => {
            const status = statusConfig[project.status];
            return (
              <Card 
                key={project.id} 
                className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}>
                      {status.label}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                    <User className="h-4 w-4" />
                    <span>{project.lead}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Progress</span>
                      <span className="text-white font-medium">{project.progress}%</span>
                    </div>
                    <Progress 
                      value={project.progress} 
                      className="h-2 bg-slate-700"
                    />
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
