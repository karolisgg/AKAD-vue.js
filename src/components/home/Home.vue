<template>
  <div id="app">
    <Topsection/>
    <Middlesection/>
    <Portfolio/>
  </div>
</template>

<script>
  import Topsection from '@/components/home/Topsection'
  import Middlesection from '@/components/home/Middlesection'
  import Portfolio from '@/components/home/Portfolio'
  export default {
    name: 'App',
    components: {
      Topsection,
      Middlesection,
      Portfolio
    }
  }
</script>

<style>

</style>
