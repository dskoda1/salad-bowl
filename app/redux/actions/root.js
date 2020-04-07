export const SET_USER_ID = 'ROOT_SET_USER_ID';
export const SET_USER_NAME = 'ROOT_SET_USER_NAME';
export const SET_LANGUAGE = 'ROOT_SET_LANGUAGE';
export const SET_TRANSLATIONS = 'SET_TRANSLATIONS';
export const setUserIdAction = (user) => ({
  type: SET_USER_ID,
  payload: user,
});

export const setUserName = (name) => ({
  type: SET_USER_NAME,
  payload: name,
});
