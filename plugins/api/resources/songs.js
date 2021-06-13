class Song {
  constructor(axios) {
      this.axios = axios
  }

  async list() {
      try {
          const response = await this.axios.get("/users/:userId/songs");

          return response.data
      } catch (error) {
          throw error
      }
  }
}

export default Song
