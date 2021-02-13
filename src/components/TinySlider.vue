<template>
  <div class="slider-wrapper">
    <slot></slot>
  </div>
</template>
<script>
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';

export default {
  name: 'TinySlider',
  data() {
    return {
      $slider: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const settings = {
        container: this.$el,
        mode: 'gallery',
      };
      this.$slider = tns(settings);
    },
  },
  // este metodo destruye el ciclo de vida del componente cuando ya no se visualice en pantalla
  beforeDestroy() {
    if (this.$slider) {
      this.$slider.destroy();
    }
  },
};
</script>
