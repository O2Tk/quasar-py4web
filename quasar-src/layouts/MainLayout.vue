<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>



        <div v-if="!userDetails.email">
            <q-btn
              to="/login"
              class="absolute-right q-pr-sm"
              icon="account_circle"
              disable-dropdown=true
              no-caps
              flat
              dense
              label="Login">
            </q-btn>
        </div>
        <div v-else>
            <q-btn-dropdown
              label="Profile"
              class="absolute-right q-pr-sm"
              icon="account_circle"
              no-caps
              flat
              dense>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <div class="text-h6 q-mb-md">Profile</div>

<profileCard />
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="72px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">
                      {{ userDetails.first_name }}
                      {{ userDetails.last_name }}
                  </div>

                  <q-btn
                    color="primary"
                    label="Logout"
                    @click="logoutUser"
                    push
                    size="sm"
                    v-close-popup
                  />
                </div>
              </div>
            </q-btn-dropdown>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <Py4WebLinks />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>


      <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>Powered By</q-toolbar-title>
        <div>PY4WEB v{{version_info.py4web }} and Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import Py4WebLinks from 'components/Py4WebLinks.vue'
import profileCard from 'components/profileCard.vue'

import { mapActions, mapState } from 'vuex'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  computed: {
  ...mapState('py4web_store', ['userDetails'])
  },
  methods: {
    ...mapActions('py4web_store',['logoutUser'])
  },
  components: {
    EssentialLink,
    Py4WebLinks,
    profileCard
  },
  data(){
    return {
        version_info: {}
    }
  },
  created() {
      this.$axios.get("/version")
        .then(response => this.version_info = response.data);
  },
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>
.q-toolbar, .q-btn{
      line-height: 1.2
      }
</style>
