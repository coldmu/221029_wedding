<template>
  <img class="flower-shower" :src="require(`@/assets/leaves/leaf_${selectedImage}.png`)"
       :style="cssVars"
       alt="sakura" />
</template>

<script>

export default {
  name: 'FlowerShower',
  data() {
    return {
      selectedImage: null,
    };
  },
  methods: {
    randomItem() {
      const imageNumber = Math.floor(Math.random() * (18 - 1) + 1);
      return imageNumber;
    },
  },
  created() {
    this.selectedImage = this.randomItem();
  },
  computed: {
    cssVars() {
      const fallDelay = Math.random() * 12;
      const shakeDelay = Math.random() * 3;
      const shakeDegree = Math.random() * 360;
      const leftPosition = Math.random() * 100;
      const translateX = Math.random() * (80 - 20) + 20;
      const fallDuration = Math.random() * (16 - 9) + 9;
      const shakeDuration = Math.random() * (3 - 2) + 2;
      const imageSize = Math.random() * (20 - 15) + 15;
      return {
        '--fall-delay': `${fallDelay}s`,
        '--shake-delay': `${shakeDelay}s`,
        '--shake-degree': `${shakeDegree}deg`,
        '--left-position': `${leftPosition}%`,
        '--translate-x': `${translateX}px`,
        '--fall-duration': `${fallDuration}s`,
        '--shake-duration': `${shakeDuration}s`,
        '--image-size': `${imageSize}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.flower-shower {
  z-index: 100;
  width: var(--image-size);
  left: var(--left-position);
  -webkit-animation-delay: var(--fall-delay), var(--shake-delay);
  animation-delay: var(--fall-delay), var(--shake-delay);
  position: fixed;
  top: -10%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  -webkit-animation-name: flowerleafs-fall, flowerleafs-shake;
  -webkit-animation-duration: var(--fall-duration), var(--shake-duration);
  -webkit-animation-timing-function: linear, ease-in-out;
  -webkit-animation-iteration-count: infinite, infinite;
  -webkit-animation-play-state: running, running;
  animation-name: flowerleafs-fall, flowerleafs-shake;
  animation-duration: var(--fall-duration), var(--shake-duration);
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
}
@-webkit-keyframes flowerleafs-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes flowerleafs-shake {
  0% {
    -webkit-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    -webkit-transform: translateX(var(--translate-x))
    rotate(var(--shake-degree));
    transform: translateX(var(--translate-x)) rotate(var(--shake-degree));
  }
  100% {
    -webkit-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}
@keyframes flowerleafs-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@keyframes flowerleafs-shake {
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(var(--translate-x)) rotate(var(--shake-degree));
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}
</style>
