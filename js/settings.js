export const bubbleSettings = (function () {
  let instance = null;

  function createInstance() {
    return {
      position: {
        x: 1,
        y: 1
      },
      diameter: 10,
      diameterVariety: 5,
      color: {
        r: 255,
        g: 255,
        b: 255
      },
      minVelocity: 1,
      maxVelocity: 10,
      minDirectionAngle: 0,
      maxDirectionAngle: 360,
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
