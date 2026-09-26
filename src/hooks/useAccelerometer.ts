import { useEffect, useRef } from 'react';
import { Accelerometer } from 'expo-sensors';

export const useAccelerometer = (updateIntervalMs = 50) => {
  const gravityRef = useRef({ x: 0, y: 1 });

  useEffect(() => {
    Accelerometer.setUpdateInterval(updateIntervalMs);
    const subscription = Accelerometer.addListener((data) => {
      gravityRef.current = { x: data.x, y: data.y };
    });
    return () => subscription.remove();
  }, [updateIntervalMs]);

  return gravityRef;
};
