import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setUser } from "../../components/Api/SetUser";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [option, setOption] = useState("Buyer");

  const handleOption = (e) => {
    setOption(e.target.value);
  };

  const {
    createUser,
    updateUserProfile,
    signInWithGoogle,
    loading,
    setLoading,
  } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageFile = form.image.files[0];

    if (!imageFile) {
      toast("Please Select A Profile Picture");
      return;
    }

    const formData = new FormData();
    setLoading(true);
    formData.append("image", imageFile);

    const imgAPI = "6d366223bef33de9baf4dac3d35fbd81";
    const url = `https://api.imgbb.com/1/upload?key=${imgAPI}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const image = data.data.display_url;
        // create user
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
            updateUserProfile(name, image)
              .then(() => {
                setUser(result.user, option);
                setLoading(false);
                authToken(result.user);
                form.reset();
                toast.success("Account Create Successfully", {
                  duration: 3000,
                });
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err) => {
            setLoading(false);
            toast.error(err.message);
            console.error(err);
          });
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user, "Buyer");
        authToken(result.user);
        setLoading(false);
        toast.success("Log In Successful");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
        console.error(err);
      });
  };

  const authToken = (user) => {
    fetch(`http://localhost:5000/jwt?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("swap-token", data.accessToken);
          navigate(from, { replace: true });
        }
      });
  };

  return (
    <div className="container mx-auto py-10">
      <section className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <h2 className="text-3xl text-center font-medium text-primary">
              Sign Up
            </h2>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                name="name"
                className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:ring-opacity-40"
                placeholder="Name"
              />
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                name="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md  focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>

            <label
              htmlFor="file"
              className="flex items-center mx-auto mt-6 text-center border bg-white rounded-md cursor-pointer"
            >
              <input
                id="file"
                type="file"
                name="image"
                accept="image/*"
                className="file-input file-input-ghost bg-white"
              />
            </label>

            <div className="relative inline-flex mt-6 w-full">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-3 text-gray-300 absolute "
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#D1D5DB"
                    fillRule="nonzero"
                  />
                </svg>
              </span>
              <select
                onChange={handleOption}
                className="block appearance-none w-full px-10 py-3 text-gray-700 bg-white border rounded-md  focus:ring-opacity-40"
              >
                <option className="text-gray-700">Buyer</option>
                <option>Seller</option>
              </select>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                {loading ? <SmallSpinner /> : "Sign Up"}
              </button>

              <button
                onClick={handleGoogleSignIn}
                className="flex items-center w-full justify-center px-6 py-3 mt-4 duration-300 transform border-2 rounded-lg "
              >
                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>

                <span className="mx-2">Sign in with Google</span>
              </button>

              <div className="mt-6 text-center ">
                <Link
                  to="/login"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
