import React from 'react';
import { View } from 'react-native';

export const PlatformRenderer = ({ body, size, color }: any) => {
  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;
  const angle = body.angle;

  // Usamos React.createElement para evitar que el chat borre las etiquetas
  return React.createElement(View, {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width: width,
      height: height,
      backgroundColor: color || '#333344',
      transform: [{ rotate: `${angle}rad` }],
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#ffffff55'
    }
  });
};