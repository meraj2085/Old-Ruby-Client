export const getRole = async (email) => {
  const res = await fetch(
    `http://localhost:5000/user/${email}`,
    {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("OldRuby-Token")}`,
      },
    }
  );
  const user = await res.json();
  return user?.role;
};

