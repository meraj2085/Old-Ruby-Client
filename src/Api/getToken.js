// Get jwt token & save user info in DB

export const getToken = (user, role) => {
  const currentUser = {
    email: user.email,
    role: role ? role : "Buyer",
    seller_verification: false,
  };

  fetch(`https://oldruby-server.vercel.app/user/${user?.email}`, {
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

export const token = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch("https://oldruby-server.vercel.app/jwt", {
    method: "POST",
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

export const getTokenForGmailLogin = (user) => {
  const currentUser = {
    email: user.email,
    role: "Buyer",
  };

  fetch(`https://oldruby-server.vercel.app/user/${user?.email}`, {
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
