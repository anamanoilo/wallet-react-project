const getIsAuth = (state) => state.session.isAuth;
const getUsername = (state) => state.session.user.name;

const authSelectors = { getIsAuth, getUsername };

export default authSelectors;
