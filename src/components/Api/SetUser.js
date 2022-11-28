export const setUser = (user, accountType) => {
  const setUser = {
    displayName: user?.displayName,
    email: user?.email,
    photoURL: user?.photoURL,
    accountType: accountType,
    verified: false,
  };

  fetch(
    `https://swap-deal-server-pblnsdizd-sakib-xrz.vercel.app/user/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(setUser),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};
