import Matter from 'matter-js';

export interface DancerOptions {
  radius?: number;
  restitution?: number;
  friction?: number;
}

export const createDancerBody = (
  x: number,
  y: number,
  options: DancerOptions = {}
): Matter.Body => {
  const { radius = 25, restitution = 0.5, friction = 0.05 } = options;

  return Matter.Bodies.circle(x, y, radius, {
    restitution,
    friction,
    frictionAir: 0.01,
    density: 0.001,
  });
};