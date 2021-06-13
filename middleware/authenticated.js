export default ({ store, redirect }) => {

  // retrieving keys via object destructuring
  const isAuth = store.getters.isAuth
  if (!isAuth) {
    return redirect('/login')
  }
}
