import React from 'react';
import { View, Text } from 'react-native';

export const DancerRenderer = ({ body, color, emoji }: any) => {
  // Asumimos un tamaño de 40x40 para las bolas
  const width = 40;
  const height = 40;
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;
  const angle = body.angle;

  return React.createElement(
    View,
    {
      style: {
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
        backgroundColor: color || 'transparent',
        borderRadius: width / 2,
        transform: [{ rotate: `${angle}rad` }],
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ffffff33'
      }
    },
    React.createElement(
      Text,
      { style: { fontSize: 26 } },
      emoji || '⚽'
    )
  );
};