<template>
  <div class="starry-sky-container">
    <ul class="stars">
      <li
        class="star"
        v-for="(item, index) in starsCount"
        :key="index"
        ref="star"
      >
      </li>
    </ul>
  </div>
</template>

<script>
import { prefixStyle } from '@/utils/dom'

export default {
  name: 'StarrySky',
  data() {
    return {
      starsCount: 800, // 星星数量
      distance: 800 // 间距
    }
  },
  computed: {
  },
  mounted() {
    console.log(this.$refs.star)
    let transformOrigin = prefixStyle('transformOrigin')
    let transform = prefixStyle('transform')

    for (let item of this.$refs.star) {
      let speed = 0.2 + (Math.random() * 1)
      let thisDistance = this.distance + (Math.random() * 300)
      item.style[transformOrigin] = `0 0 ${thisDistance}px`
      item.style[transform] = `translate3d(0, 0, -${thisDistance}px) rotateY(${Math.random() * 360}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed}, ${speed})`
    }
  }
}
</script>

<style lang="less" scoped>
.starry-sky-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #1b2947);
  background: radial-gradient(200% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
  background-attachment: fixed;
  overflow: hidden;

  .stars {
    transform: perspective(500px);
    transform-style: preserve-3d;
    // position: absolute;
    perspective-origin: 50% 100%;
    left: 50%;
    bottom: 0;
    animation: rotate 90s infinite linear;
  }
  .star {
    width: 2px;
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f7f7b8;
    backface-visibility: hidden;
  }
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateX(-40deg) rotateY(0) rotateZ(200deg);
  }
  100% {
    transform: perspective(400px) rotateX(-40deg) rotateY(0) rotateZ(-360deg);
  }
}
</style>
