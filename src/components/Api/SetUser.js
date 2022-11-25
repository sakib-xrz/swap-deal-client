export const setUser = (user, accountType) => {
  const setUser = {
    displayName: user?.displayName,
    email: user?.email,
    photoURL: user?.photoURL,
    accountType: accountType,
    verified: false,
  };

  fetch(`http://localhost:5000/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(setUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
