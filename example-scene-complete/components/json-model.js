/* THREE.JSONLoader component. */

AFRAME.registerComponent('json-model', {
  schema: {
    type: 'src'
  },

  init: function () {
    this.loader = new THREE.ObjectLoader();
  },

  update: function () {
    var el = this.el;
    this.loader.load(this.data, function (object) {
      el.setObject3D('mesh', object);
    });
  }
});
