export const gravitySystem = (entities: any) => {
  const engine = entities.physics.engine;
  const gravityRef = entities.gravityInput;

  // Leemos el sensor en tiempo real y multiplicamos x3 para que sea más divertido
  if (gravityRef && gravityRef.current) {
    engine.gravity.x = -gravityRef.current.x * 3;
    engine.gravity.y = gravityRef.current.y * 3;
  }

  return entities;
};
