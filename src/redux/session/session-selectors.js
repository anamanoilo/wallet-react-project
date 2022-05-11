const getIsAuth = (state) => state.session.isAuth;
const getUsername = (state) => state.session.user.username;

const authSelectors = { getIsAuth, getUsername };

export default authSelectors;
