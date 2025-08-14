// src/DeviceContext.js
import React, { createContext, useState } from 'react';

// Create a context to hold the shared state
export const DeviceContext = createContext();

// Create a provider component that will wrap your app
export const DeviceProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [deviceName, setDeviceName] = useState(null);
  const [deviceLogs, setDeviceLogs] = useState([]);

  // Function to connect a device
  const connectToDevice = (name) => {
    setIsConnected(true);
    setDeviceName(name);
    setDeviceLogs(prevLogs => [...prevLogs, `[INFO] Connected to ${name}`]);
  };

  // Function to disconnect a device
  const disconnectDevice = () => {
    setIsConnected(false);
    setDeviceName(null);
    setDeviceLogs(prevLogs => [...prevLogs, `[INFO] Disconnected from ${deviceName}`]);
  };

  // Function to add a new log message
  const addLog = (message) => {
    setDeviceLogs(prevLogs => [...prevLogs, message]);
  };

  // Function to clear all log messages
  const clearLogs = () => {
    setDeviceLogs([]);
  };

  // The value object contains the state and functions to update the state
  const value = {
    isConnected,
    deviceName,
    deviceLogs,
    connectToDevice,
    disconnectDevice,
    addLog,
    clearLogs,
  };

  return (
    <DeviceContext.Provider value={value}>
      {children}
    </DeviceContext.Provider>
  );
};