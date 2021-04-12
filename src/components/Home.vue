<template>
  <div class="home-route">
   <h1>{{ home_msg }}</h1>

   <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      home_msg: 'This is a home route!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.home-route {
  padding: 20px;
}

p {
  padding: 10px;
}
</style>
