export const getRole = async (email) => {
  const res = await fetch(`https://oldruby-server.vercel.app/user/${email}`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("OldRuby-Token")}`,
    },
  });
  const user = await res.json();
  return user?.role;
};
