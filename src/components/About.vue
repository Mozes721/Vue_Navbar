<template>
  <div class="about">
    {{ msg }}
    <hr class="solid">
    <img ref="image" src="../components/img/vue_img.png">
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'This is about route'
    }
  }
}
</script>

<style scoped>
.about {
  font-style: italic;
  font-weight: bold;
  font-size: 30px;
  line-height: 200px;
  height: 200px;
  text-align: center;
  }

  hr.solid {
  border-top: 2px solid rgb(42, 40, 40);
  width: 90%;
  margin: auto;
  margin-bottom: 10px
}

</style>
