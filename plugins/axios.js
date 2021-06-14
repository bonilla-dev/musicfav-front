export default ({ $axios, env, store }) => {
  $axios.onRequest(config => {
    $axios.setToken(store.state.token, 'Bearer');
  });
}
