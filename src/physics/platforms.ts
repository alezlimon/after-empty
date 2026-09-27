import Matter from 'matter-js';

export const createPlatform = (x: number, y: number, width: number, height: number, angle: number = 0) => {
  return Matter.Bodies.rectangle(x, y, width, height, {
    isStatic: true, // Esto hace que la plataforma flote y no caiga por la gravedad
    angle: angle,
    friction: 0.2,
    restitution: 0.6 // Le damos un poco de rebote extra a la goma
  });
};
