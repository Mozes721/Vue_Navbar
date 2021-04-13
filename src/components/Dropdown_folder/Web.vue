<template>
  <div>
    <h1>World Wide Web</h1>

   <p>{{ msg }}</p>

  <ul class="list">
      <li>World</li>
      <li>Wide</li>
      <li>Web</li>
  </ul>  

  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'The World Wide Web (WWW), commonly known as the Web, is an information system where documents and other web resources are identified by Uniform Resource Locators (URLs, such as https://example.com/), which may be interlinked by hypertext, and are accessible over the Internet.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 20px;
}
.list {
  align-items: left;
}

li {
    font-size: 22px;
    margin-left: 10px;
    list-style: circle;
 }

</style>
