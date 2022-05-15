const USER_LOCAL = "USER_LOCAL";
export const localServices = {
  setUser: (data) => {
    let dataJson = JSON.stringify(data);
    localStorage.setItem(USER_LOCAL, dataJson);
  },
  getUser: () => {
    if (localStorage.getItem(USER_LOCAL)) {
      return JSON.parse(localStorage.getItem(USER_LOCAL));
    }
  },
  removeUser: () => {
    localStorage.setItem(USER_LOCAL, "");
  },
};
