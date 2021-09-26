<template>
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Py4Web Links
        </q-item-label>
          <q-list>
              <q-item
                clickable
                tag="a"
                target="_blank"
                :href="link.link"
                v-for="link in py4weblinks"
                :key="link.title"
                v-bind="link"
              >
                <q-item-section
                  v-if="link.icon"
                  avatar
                >
                  <q-icon :name="link.icon" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ link.title }}</q-item-label>
                  <q-item-label caption>
                    {{ link.caption }}
                  </q-item-label>
                </q-item-section>
              </q-item>
          </q-list>
      </q-list>
</template>

<script>

const linksData = [
  {
    title: 'py4web Docs',
    caption: 'py4web.com',
    icon: 'school',
    link: 'http://py4web.com/_documentation/static/en/index.html'
  },
  {
    title: 'py4web Github',
    caption: 'github.com/web2py/py4web',
    icon: 'code',
    link: 'https://github.com/web2py/py4web'
  },
  {
    title: 'py4web Forum',
    caption: 'Google Group',
    icon: 'record_voice_over',
    link: 'https://groups.google.com/g/py4web'
  },
  {
    title: 'py4web Dashboard',
    caption: 'Local Dashboard',
    icon: 'dashboard',
    link: 'https://groups.google.com/g/py4web'
  },
];

export default {
  name: 'Py4WebLinks',
  data () {
    return {
      py4weblinks: linksData
    }
  }
}
</script>
