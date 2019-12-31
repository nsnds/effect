<template>
  <div class="text-break-container">
    <p class="text" data-text="BREAK">BREAK</p>
  </div>
</template>

<script>
export default {
  name: 'TextBreak',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.text-break-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(brown, sandybrown);

  .text {
    position: relative;
    font-size: 5em;
    font-family: 'arial black';
    color: transparent;
  }
  .text:before,
  .text:after {
    position: absolute;
    top: 0;
    left: 0;
    content: attr(data-text);
    color: lightyellow;
    transition: 0.2s;
  }
  .text:before {
    /*background-color: darkgreen;*/
    clip-path: polygon(0 0, 60.3% 0, 30.3% 100%, 0 100%);
  }
  .text:after {
    /*background-color: darkblue;*/
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 30% 100%);
  }
  .text:hover:before {
    left: -0.15em;
    transform: rotate(-5deg);
    top: -0.05em;
  }
  .text:hover:after {
    left: 0.15em;
    transform: rotate(5deg);
    top: 0.05em;
  }
}
</style>
