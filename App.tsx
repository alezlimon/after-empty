import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';

import { physicsSystem } from './src/systems/physicsSystem';
import { gravitySystem } from './src/systems/gravitySystem';
import { useAccelerometer } from './src/hooks/useAccelerometer';
import { createScreenBoundaries } from './src/physics/boundaries';
import { createDancerBody } from './src/physics/dancers';
import { createPlatform } from './src/physics/platforms';
import { DancerRenderer } from './src/components/DancerRenderer';
import { PlatformRenderer } from './src/components/PlatformRenderer';

const { width, height } = Dimensions.get('window');

const setupWorld = () => {
  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;
  engine.gravity.x = 0;
  engine.gravity.y = 0;

  // Creamos los límites de la pantalla y los bailarines
  const boundaries = createScreenBoundaries(width, height);
  const dancer1 = createDancerBody(width / 2, height / 2 - 200);
  const dancer2 = createDancerBody(width / 2 + 30, height / 2 - 250);
  const dancer3 = createDancerBody(width / 2 - 30, height / 2 - 300);

  // Creamos plataformas en forma de zig-zag o embudo
  // x, y, ancho, alto, ángulo (en radianes)
  const platform1 = createPlatform(width / 2 - 60, height / 2 - 50, 180, 25, 0.3);
  const platform2 = createPlatform(width / 2 + 60, height / 2 + 100, 180, 25, -0.3);
  const platform3 = createPlatform(width / 2, height / 2 + 250, 120, 25, 0); // Plataforma plana abajo

  Matter.World.add(world, [
    ...boundaries, 
    dancer1, dancer2, dancer3, 
    platform1, platform2, platform3
  ]);

  return {
    physics: { engine, world },
    platform1: { body: platform1, size: [180, 25], color: '#ff0055', renderer: PlatformRenderer },
    platform2: { body: platform2, size: [180, 25], color: '#00ccff', renderer: PlatformRenderer },
    platform3: { body: platform3, size: [120, 25], color: '#00ff66', renderer: PlatformRenderer },
    dancer1: { body: dancer1, color: '#b537f2', renderer: DancerRenderer },
    dancer2: { body: dancer2, color: '#2a1b4e', renderer: DancerRenderer },
    dancer3: { body: dancer3, color: '#ffffff', renderer: DancerRenderer },
  };
};

export default function App() {
  const [entities, setEntities] = useState(null);
  const gravityInput = useAccelerometer();

  useEffect(() => {
    setEntities(setupWorld());
  }, []);

  if (!entities) return null;

  entities.gravityInput = gravityInput;

  return React.createElement(View, { style: styles.container },
    React.createElement(GameEngine, {
      systems: [physicsSystem, gravitySystem],
      entities: entities,
      style: styles.gameContainer
    })
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050508' },
  gameContainer: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
});
