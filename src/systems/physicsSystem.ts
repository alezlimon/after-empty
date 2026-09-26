import Matter from 'matter-js';

export const physicsSystem = (entities: any, { time }: { time: { delta: number } }) => {
  const engine = entities.physics.engine;
  Matter.Engine.update(engine, time.delta);
  return entities;
};
