const getIsAuth = (state) => state.session.isAuth;
const getUsername = (state) => state.session.user.username;

export const getCurrentUser = (state) => state.session.currentUser;

const authSelectors = { getIsAuth, getUsername };

export default authSelectors;
