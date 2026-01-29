
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { Shield, Info, ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'Ghana', transparency: 78, velocity: 85, density: 92 },
  { name: 'Nigeria', transparency: 62, velocity: 58, density: 74 },
  { name: 'Kenya', transparency: 71, velocity: 80, density: 88 },
  { name: 'Rwanda', transparency: 89, velocity: 94, density: 91 },
  { name: 'South Africa', transparency: 75, velocity: 68, density: 82 },
];

const pieData = [
  { name: 'Legal Basis', value: 400 },
  { name: 'Diplomacy', value: 300 },
  { name: 'Technical', value: 300 },
  { name: 'Human Capital', value: 200 },
];

const COLORS = ['#0f172a', '#d97706', '#475569', '#94a3b8'];

const GovernanceDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'velocity' | 'transparency'>('velocity');

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif mb-4">GGPA Governance Index</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real-time diagnostics of administrative velocity and institutional integrity across the Commonwealth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold font-serif">Administrative Velocity by Nation</h3>
              <div className="flex bg-slate-100 p-1 rounded-xl">
                <button 
                  onClick={() => setActiveTab('velocity')}
                  className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'velocity' ? 'bg-white shadow-sm text-amber-600' : 'text-slate-500'}`}
                >
                  Velocity
                </button>
                <button 
                  onClick={() => setActiveTab('transparency')}
                  className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'transparency' ? 'bg-white shadow-sm text-amber-600' : 'text-slate-500'}`}
                >
                  Transparency
                </button>
              </div>
            </div>
            
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                  />
                  <Bar dataKey={activeTab} radius={[8, 8, 0, 0]} barSize={40}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#0f172a' : '#d97706'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] relative overflow-hidden flex-grow">
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <Shield size={80} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-4 relative z-10">Institutional Integrity Audit</h3>
              <p className="text-slate-400 text-sm mb-6 relative z-10">
                Does your institution meet global standards? Book an IIGRA diagnostic.
              </p>
              <button className="flex items-center gap-2 bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-400 transition-all">
                Request Audit
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold font-serif mb-6">Compendium Distribution</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {pieData.map((item, i) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[i]}}></div>
                    <span className="text-xs font-medium text-slate-500">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceDashboard;
