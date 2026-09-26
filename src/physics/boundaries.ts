import Matter from 'matter-js';

const THICKNESS = 50;

const createFloor = (width: number, height: number): Matter.Body =>
  Matter.Bodies.rectangle(width / 2, height + THICKNESS / 2, width, THICKNESS, {
    isStatic: true,
  });

const createCeiling = (width: number): Matter.Body =>
  Matter.Bodies.rectangle(width / 2, -THICKNESS / 2, width, THICKNESS, {
    isStatic: true,
  });

const createLeftWall = (height: number): Matter.Body =>
  Matter.Bodies.rectangle(-THICKNESS / 2, height / 2, THICKNESS, height, {
    isStatic: true,
  });

const createRightWall = (width: number, height: number): Matter.Body =>
  Matter.Bodies.rectangle(width + THICKNESS / 2, height / 2, THICKNESS, height, {
    isStatic: true,
  });

export const createScreenBoundaries = (width: number, height: number): Matter.Body[] => [
  createFloor(width, height),
  createCeiling(width),
  createLeftWall(height),
  createRightWall(width, height),
];