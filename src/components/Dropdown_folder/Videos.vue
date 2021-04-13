<template>
  <div>
   <h3 style="padding: 3rem;">{{ msg }}</h3>
  
    <br>
  <div>
    <section>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-uCUCmrNgeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>>
    </section>
  </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Get the official YouTube app for Android phones and tablets. See what the world is watching -- from the hottest music videos to what is trending in gaming'
    }
  }
}
</script>
