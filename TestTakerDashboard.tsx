// src/pages/TestTakerDashboard.tsx
import React from 'react';
import AudioRecorder from '../components/AudioRecorder';

const TestTakerDashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Test Taker Dashboard</h1>
      <AudioRecorder />
    </div>
  );
};

export default TestTakerDashboard;
