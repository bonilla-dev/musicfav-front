import jwtDecode from 'jwt-decode'

export const state = () => ({
  songs: [],
  token: null,
  user: null
})

export const mutations = {
  saveToken(state, token = null){
    state.token = token

    if(token){
      state.user = jwtDecode(token)
    }

    if(!token){
      state.user = null
    }
  }
}

export const actions = {

  nuxtServerInit(ctx, {app}){

    const cookieToken = app.$cookies.get('jwt-token')

    if(cookieToken){
      ctx.dispatch('login',cookieToken)
    }
  },
  login(context, token){
    if(token === '' || token === undefined){
      token = null
    }

    if(token){
      this.$cookies.set('jwt-token', token)
      this.$api.initSession(token)
    }

    context.commit('saveToken', token)
  },
  logout(context){
    this.$cookies.remove('jwt-token')

    this.$api.closeSession()

    context.commit('saveToken')
  }
}

export const getters = {
  isAuth(state){
    return state.token !== null
  },
  token(state){
    return state.token
  },
  currentUser(state){
    return state.user
  }
}
