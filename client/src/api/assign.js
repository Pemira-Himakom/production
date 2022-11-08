// import Cookies from "universal-cookie";
// const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

export const assign = async (input) => {
  const response = await fetch(`/api/admin/assign`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
  return response.json();
};
