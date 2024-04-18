import { Helmet } from "react-helmet-async";
import UseAuth from "../../hooks/UseAuth";
import { useEffect, useState } from "react";

const UpdateProfile = () => {
  const { updateUserProfile, user, setUser } = UseAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateUserProfile(name, photoURL);
    setUser({ displayName: name, photoURL }); // Update local state for immediate UI feedback
  };

  return (
    <div className="flex flex-col min-h-screen mt-16 lg:flex-row lg:ml-44 lg:max-w-[1300px] mx-auto lg:space-x-8">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row mx-auto lg:space-x-8">
        <form onSubmit={handleUpdateProfile} className=" border border-gray-400 w-72 lg:w-96 h-fit p-8 space-y-6 rounded-md shadow">
          <h2 className="w-full text-3xl font-bold text-center animate__animated animate__fadeInLeft">Update Profile</h2>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              defaultValue={name}
              placeholder="Your name"
              required
              className="block w-full p-2 rounded border border-gray-600 bg-gray-100 dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="photo" className="block mb-1 ml-1">Photo URL</label>
            <input
              id="photo"
              type="text"
              placeholder="Photo URL"
              name="photo"
              required
              defaultValue={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="block w-full p-2 rounded border border-gray-600 bg-gray-100 dark:bg-gray-100"
            />
          </div>
          <label htmlFor="photo" className="block mb-1 ml-1">Email</label>
          <input 
            type="email"
            disabled
            value={user?.email}
            placeholder="Email"
            className="block w-full p-2 rounded border border-gray-600 bg-gray-100 dark:bg-gray-100 opacity-50 cursor-not-allowed"
          />
          <button
            type="submit"
            className="w-full font-extrabold text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
