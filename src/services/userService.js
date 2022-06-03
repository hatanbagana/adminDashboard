const createUser = async (props) => {
  return await fetch("https://dev-api.mstars.mn/admin/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  });
};
const loginUser = async (props) => {
  return await fetch("https://dev-api.mstars.mn/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  });
};
const user_info = async (props) => {
  localStorage.setItem("token", props.token)
  localStorage.setItem("user", JSON.stringify(props.data))
  // console.log(  JSON.stringify(props.data));


};

export const userService = {
  createUser,loginUser,user_info
};
