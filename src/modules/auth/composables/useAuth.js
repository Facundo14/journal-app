import { computed } from "@vue/reactivity"
import { useStore } from "vuex"


const useAuth = () => {

    const store = useStore()

    const createUser = async (user) => {

        const resp = await store.dispatch('auth/createUser', user)

        return resp
    }

    const loginUser = async (user) => {
        
        const resp = await store.dispatch('auth/signInUser', user)

        return resp
    }

    const checkAuthStatus = async () => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    const logout = () => {
        store.commit('auth/logout')
        store.commit('journal/clearEntries')
    }

    return {
        createUser,
        loginUser,
        checkAuthStatus,
        logout,

        authStatus: computed(() => store.getters['auth/currentState']),
        currentUser: computed(() => store.getters['auth/currentUser'])
    }
}


export default useAuth