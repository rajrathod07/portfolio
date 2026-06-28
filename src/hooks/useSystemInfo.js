// src/hooks/useSystemInfo.js
import { useState, useEffect } from 'react';

export function useSystemInfo() {
  const [time, setTime] = useState(new Date());
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    // Update clock every second
    const timer = setInterval(() => {
      setTime(new Date());
      setUptime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatUptime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return {
    time: formatTime(time),
    uptime: formatUptime(uptime),
    status: 'ONLINE',
  };
}
