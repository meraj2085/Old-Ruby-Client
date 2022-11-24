export const getRole = async (email) => {
  const response = await fetch(
    `http://localhost:5000/user/${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("OldRuby-Token")}`,
      },
    }
  );
  const user = await response.json();
  return user?.role;
};

