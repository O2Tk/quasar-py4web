// Is there a way to use axios as defined in boot/axios.js?
import axios from 'axios'
export function updateProfile({}, payload) {
    axios.post('/auth/api/profile', payload)
        .then(response => response.data)
        .then(response => {
            console.log(response)
        // commit('SET_Items', response)
        })
        .catch(error => {
                console.log(error.message)
        })		
}
export function registerUser({}, payload) {
    // console.log(payload)
    var names = payload.name.split(" ")
    var first_name = names.slice(0,1).join(" ")
    var last_name = names.slice(1).join(" ")
    axios.post('/auth/api/register',
         {
             first_name: first_name,
             last_name: last_name,
             username: payload.email,
             email: payload.email,
             password: payload.password
        })
        .then(response => response.data)
        .then(response => {
            console.log(response)
        // commit('SET_Items', response)
        })
        .catch(error => {
                console.log(error.message)
        })		
}
export function loginUser({commit}, payload) {
    // console.log(payload.email)
    // console.log(payload.password)
    
    axios.post('/auth/api/login',
         {
             email: payload.email,
             password: payload.password
        })
        .then(response => response.data)
        .then(response => {
            console.log(response)
            commit('setUserDetails', response.user)
            this.$router.push('/')
        // commit('SET_Items', response)
        })
        .catch(error => {
                console.log(error.message)
        })		
}

export function logoutUser({commit}, payload) {
    // console.log(payload.email)
    // console.log(payload.password)
    
    axios.post('/auth/api/logout',
         {
             email: payload.email,
             password: payload.password
        })
        .then(response => response.data)
        .then(response => {
            console.log(response)
            commit('setUserDetails', {})
        // commit('SET_Items', response)
        })
        .catch(error => {
                console.log(error.message)
        })		
}

export function handleAuthStateChanged({ commit }) {
    console.log('py4web-store_actions: handleAuthStateChanged')

    axios.get('/auth/api/profile',
         {})
        .then(response => response.data)
        .then(response => {
            console.log('py4web-store_actions: user is logged in')
            commit('setUserDetails', response.user)
        // commit('SET_Items', response)
        })
        .catch(error => {
                console.log('py4web-store_actions: user is not logged in')
                console.log(error.message)
                commit('setUserDetails', {})
        })		
}
