// Get jwt token & save user info in DB

export const getToken = (user, role) => {
  const currentUser = {
    email: user.email,
    role: role ? role : "Buyer",
  };

  fetch(`http://localhost:5000/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("OldRuby-Token", data.token);
    });
};
