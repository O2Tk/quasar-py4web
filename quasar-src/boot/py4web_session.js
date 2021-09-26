import { boot } from 'quasar/wrappers'
import axios from 'axios'

async function checkAuth(store){
    console.log('py4web_session-boot: checkAuth')
    var ret = false
        await axios.get('/auth/api/profile', {})
        .then(response => response.data)
        .then(response => {
            console.log('checkAuth: user is logged in')
            console.log(response.user)
            store.commit('py4web_store/setUserDetails', response.user)
            ret = true
        })
        .catch(error => {
            store.commit('py4web_store/setUserDetails', {})
            console.log('checkAuth: checkAuth false')
            ret = false
        })
    return ret
}
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( {store}/* { app, router, ... } */) => {
  console.log('boot_py4web_session: in boot')
  var auth = await checkAuth(store)
  console.log('boot_py4web_session: auth:')
  console.log(auth)

})
