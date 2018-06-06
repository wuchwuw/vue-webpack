<template>
  <div class="app">
    <div class="aa"></div>
    <div class="hairlines dpr2"></div>
    <div class="hairlines dpr3"></div>
    <div class="example"></div>
    <div class="bb"></div>
  </div>
</template>
<script>
  export default {
    name: 'App',
    methods: {
      aa () {}
    }
  }
</script>
<style lang="stylus" src="common/stylus/index.styl"></style>
<style>
.app {
  display: flex;
  height: 100px;
  width: 200px;
  padding-top: 300px;
}
@svg square {
  @rect {
    fill: var(--color, #00b1ff); width: 100%; height: 0.5px;
  }
}
.example {
  background: white svg(square param(--color ));
  height: 100px;
  width: 100%;
}
.aa {
  height: 100px;
  width: 100px;
  border: 1px solid #00b1ff
}
.hairlines { position: relative; border:none; height: 100px; width: 100px;}
@media only screen and (-webkit-device-pixel-ratio: 2){
  .dpr2:after{ content: ''; position: absolute; left: 0; background: #00b1ff; width: 100%; height: 1px; transform: scaleY(0.5); transform-origin: 0 0; }
}
@media only screen and (-webkit-device-pixel-ratio: 3) {
  .dpr3:after{ content: ''; position: absolute; left: 0; background: black; width: 100%; height: 1px; transform: scaleY(0.5); transform-origin: 0 0; }
}
.bb {
  width: 0;
  height: 0;
  border-left: 30px solid red;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 30px solid transparent;
}
</style>
