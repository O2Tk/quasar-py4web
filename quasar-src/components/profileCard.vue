<template>

  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="submitForm"
      class="q-gutter-md"
    >
                  <q-input standard v-model="userDetails.first_name" label="First Name" stack-label :dense="dense" />
                  <q-input standard v-model="userDetails.last_name" label="Last Name" stack-label :dense="dense" />
                  <q-input standard v-model="userDetails.email" label="email" stack-label :dense="dense" />
      <div>
        <q-btn label="Save" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
        name: 'profileCard',
	props: [],
        computed: {
            ...mapState('py4web_store', ['userDetails'])
        },
	data() {
//		return {
//			formData: {
//				first_name: 'test',
//				last_name: 'lastnametets',
//				email: '',
//				password: ''
//			}
//		}
	},
        methods: {
            ...mapActions('py4web_store', ['updateProfile']),
            submitForm(evt) {
                console.log("updateProfile: ", this.userDetails)
                this.updateProfile(this.userDetails)
                this.$q.notify({
                    position: 'top',
                    message: 'Saved'
                    })
            }
        }

}
</script>
