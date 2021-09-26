export function isAuthenticated(state) {
    console.log("py4web-store_getters: in isAuthenticated")
    return !!state.isAuthenticated
}
