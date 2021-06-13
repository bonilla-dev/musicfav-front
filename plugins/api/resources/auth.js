class Auth{
  constructor(axios){
      this.axios = axios
  }

  async login(email, password){
      try {
          const response = await this.axios.post("auth/login", {email, password})

          return response.data
      }catch(error){
          throw error
      }
  }
}

export default Auth
