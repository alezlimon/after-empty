import React from 'react';
import { View, StyleSheet } from 'react-native';
import Matter from 'matter-js';

export interface DancerRendererProps {
  body: Matter.Body;
  radius?: number;
  color?: string;
}

export const DancerRenderer = ({
  body,
  radius = 25,
  color = '#b537f2',
}: DancerRendererProps) => {
  const { x, y } = body.position;

  return React.createElement(View, {
    style: [
      styles.circle,
      {
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: color,
        transform: [
          { translateX: x - radius },
          { translateY: y - radius },
          { rotate: `${body.angle}rad` },
        ],
      },
    ],
  });
};

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
});