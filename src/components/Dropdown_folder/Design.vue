<template>
  <div>
   <h1>{{ msg }}</h1>

    <div class="e-card">
      <br>
        <div class="e-card-title">Designing made real</div>
        <br>
      </div>
      <div class="e-card-content">A designer is a person who plans the look or workings of something prior to it being made, by preparing drawings or plans. In practice, anyone who creates tangible or intangible objects, products, processes, laws, games, graphics, services, and experiences is referred to as a designer.</div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'design',
  data () {
    return {
      msg: 'Designer images'
    }
  }
}
</script>

<style scoped>


.e-card {
    width: 300px;
    margin: auto;
}
</style>