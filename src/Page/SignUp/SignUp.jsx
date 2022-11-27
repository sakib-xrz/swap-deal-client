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
                form.reset();
                toast.success("Account Create Successfully, Please Login", {
                  duration: 3000,
                });
                setTimeout(navigate("/login"), 3000);
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
