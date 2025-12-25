// Ocean Data Mock - Marine Data Dashboard

export const oceanData = [
  {
    id: 'pacific',
    name: 'Pacific Ocean',
    description: 'Largest and deepest ocean basin',
    color: '#0EA5E9',
    stats: {
      temperature: { value: 17.2, unit: '°C', trend: 'up', change: 0.3 },
      salinity: { value: 34.5, unit: 'PSU', trend: 'stable', change: 0 },
      currentSpeed: { value: 2.8, unit: 'knots', trend: 'up', change: 0.2 },
      ph: { value: 8.1, unit: 'pH', trend: 'down', change: -0.02 },
      waveHeight: { value: 2.4, unit: 'm', trend: 'up', change: 0.5 }
    },
    lastUpdated: '2025-07-15T10:30:00Z'
  },
  {
    id: 'atlantic',
    name: 'Atlantic Ocean',
    description: 'Second largest ocean',
    color: '#6366F1',
    stats: {
      temperature: { value: 18.5, unit: '°C', trend: 'up', change: 0.4 },
      salinity: { value: 35.2, unit: 'PSU', trend: 'up', change: 0.1 },
      currentSpeed: { value: 3.2, unit: 'knots', trend: 'stable', change: 0 },
      ph: { value: 8.0, unit: 'pH', trend: 'down', change: -0.03 },
      waveHeight: { value: 3.1, unit: 'm', trend: 'up', change: 0.8 }
    },
    lastUpdated: '2025-07-15T10:28:00Z'
  },
  {
    id: 'indian',
    name: 'Indian Ocean',
    description: 'Third largest ocean',
    color: '#14B8A6',
    stats: {
      temperature: { value: 22.8, unit: '°C', trend: 'up', change: 0.5 },
      salinity: { value: 34.8, unit: 'PSU', trend: 'stable', change: 0 },
      currentSpeed: { value: 2.1, unit: 'knots', trend: 'down', change: -0.3 },
      ph: { value: 8.05, unit: 'pH', trend: 'stable', change: 0 },
      waveHeight: { value: 1.9, unit: 'm', trend: 'down', change: -0.2 }
    },
    lastUpdated: '2025-07-15T10:25:00Z'
  },
  {
    id: 'southern',
    name: 'Southern Ocean',
    description: 'Surrounds Antarctica',
    color: '#8B5CF6',
    stats: {
      temperature: { value: -1.8, unit: '°C', trend: 'down', change: -0.2 },
      salinity: { value: 34.0, unit: 'PSU', trend: 'down', change: -0.1 },
      currentSpeed: { value: 4.5, unit: 'knots', trend: 'up', change: 0.6 },
      ph: { value: 8.15, unit: 'pH', trend: 'stable', change: 0 },
      waveHeight: { value: 4.2, unit: 'm', trend: 'up', change: 1.1 }
    },
    lastUpdated: '2025-07-15T10:20:00Z'
  },
  {
    id: 'arctic',
    name: 'Arctic Ocean',
    description: 'Smallest and shallowest ocean',
    color: '#22D3EE',
    stats: {
      temperature: { value: -1.2, unit: '°C', trend: 'up', change: 0.1 },
      salinity: { value: 30.5, unit: 'PSU', trend: 'down', change: -0.2 },
      currentSpeed: { value: 1.5, unit: 'knots', trend: 'stable', change: 0 },
      ph: { value: 8.2, unit: 'pH', trend: 'stable', change: 0 },
      waveHeight: { value: 1.2, unit: 'm', trend: 'down', change: -0.3 }
    },
    lastUpdated: '2025-07-15T10:15:00Z'
  }
];

export const forecastData = {
  global: {
    seaLevelRise: { value: 3.4, unit: 'mm/year', forecast: 'Accelerating' },
    oceanWarming: { value: 0.13, unit: '°C/decade', forecast: 'Increasing' },
    acidification: { value: -0.02, unit: 'pH/decade', forecast: 'Declining' }
  },
  weekly: [
    { day: 'Mon', temp: 17.2, waves: 2.4 },
    { day: 'Tue', temp: 17.5, waves: 2.8 },
    { day: 'Wed', temp: 17.8, waves: 3.1 },
    { day: 'Thu', temp: 17.4, waves: 2.6 },
    { day: 'Fri', temp: 17.1, waves: 2.2 },
    { day: 'Sat', temp: 17.3, waves: 2.5 },
    { day: 'Sun', temp: 17.6, waves: 2.9 }
  ]
};

export const insightsData = [
  {
    id: 1,
    title: 'Ocean Temperature Anomaly Detected',
    description: 'Pacific Ocean showing 0.5°C above average temperature in equatorial region.',
    severity: 'warning',
    timestamp: '2025-07-15T09:00:00Z'
  },
  {
    id: 2,
    title: 'Coral Bleaching Alert',
    description: 'Indian Ocean reefs experiencing thermal stress in multiple locations.',
    severity: 'critical',
    timestamp: '2025-07-14T14:30:00Z'
  },
  {
    id: 3,
    title: 'Current Pattern Shift',
    description: 'Atlantic Gulf Stream showing slight weakening trend over past month.',
    severity: 'info',
    timestamp: '2025-07-13T11:15:00Z'
  },
  {
    id: 4,
    title: 'Arctic Ice Monitoring',
    description: 'Sea ice extent tracking 5% below seasonal average.',
    severity: 'warning',
    timestamp: '2025-07-12T08:45:00Z'
  }
];

export const researchData = [
  {
    id: 1,
    title: 'Deep Sea Thermal Mapping',
    status: 'active',
    progress: 67,
    lead: 'Dr. Marina Chen'
  },
  {
    id: 2,
    title: 'Microplastic Distribution Study',
    status: 'active',
    progress: 45,
    lead: 'Dr. James Peterson'
  },
  {
    id: 3,
    title: 'Bioluminescence Patterns',
    status: 'completed',
    progress: 100,
    lead: 'Dr. Yuki Tanaka'
  },
  {
    id: 4,
    title: 'Ocean Acidification Impact',
    status: 'active',
    progress: 82,
    lead: 'Dr. Sarah Williams'
  }
];

export const captainMessages = [
  {
    id: 1,
    message: 'All systems operational. Monitoring stations reporting nominal data.',
    timestamp: '2025-07-15T10:00:00Z',
    type: 'status'
  },
  {
    id: 2,
    message: 'Buoy #47 in Pacific sector requires maintenance within 72 hours.',
    timestamp: '2025-07-15T08:30:00Z',
    type: 'alert'
  },
  {
    id: 3,
    message: 'New satellite data integration completed successfully.',
    timestamp: '2025-07-14T16:00:00Z',
    type: 'update'
  }
];
