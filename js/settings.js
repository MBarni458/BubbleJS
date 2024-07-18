export const bubbleSettings = (function () {
  let instance = null;

  function createInstance() {
    return {
      position: {
        x: 1,
        y: 1
      },
      diameter: 30,
      diameterVariety: 0,
      color: {
        r: 255,
        g: 255,
        b: 255,
      },
      minVelocity: 1,
      maxVelocity: 3,
      minDirectionAngle: 0,
      maxDirectionAngle: 10,
      hittable: false,
      destroyable: false,
      fade: false,
    }
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
