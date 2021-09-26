<template>
  <q-page class="flex flex-center">
  LOGIN
  <MyTest />
    <div class="columns">
    <div class="column is-half is-offset-one-quarter" style="border : 1px solid #e1e1e1; border-radius: 10px">
    </div>
  </div>
  </q-page>
</template>

<script>
import MyTest from 'components/MyTest.vue'
export default {
  name: 'Login',
  components: { MyTest },
  data () {
    return {
      essentialLinks: ''
    }
  }
}
</script>
