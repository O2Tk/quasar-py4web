export function setUserDetails(state, payload) {
   state.userDetails = payload
   if(payload.email){
        state.isAuthenticated = true
   }else{
        state.isAuthenticated = false
   }

}
