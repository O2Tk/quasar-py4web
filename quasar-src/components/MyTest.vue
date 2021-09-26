<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item v-for="item in colors" :key="item" clickable v-ripple>
        <q-item-section>bla: {{item}}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'MyTest',
  async created() {
    const colors = await this.$axios.get('/myvue/colors')
    // const colors = await this.$axios.get('https://www.breakingbadapi.com/api/characters/1')
    console.log(colors);
    this.colors = colors.data["colors"]
  },
  data() {
    return {
      greeting: "Hello",
      colors: []
    }
  },
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
