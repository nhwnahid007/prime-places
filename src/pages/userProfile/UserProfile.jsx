import { MdEmail } from "react-icons/md";
import UseAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = UseAuth();
  return (
    <div className="min-h-screen">
      <div className="max-w-sm my-20 lg:my-40 mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
          <div className="text-center my-4">
            <img
              className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
              src={user?.photoURL}
              alt=""
            />
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                {user.displayName}
              </h3>
              <div className="inline-flex gap-2 text-gray-700 dark:text-gray-300 items-center">
                <MdEmail />
                {user.email}
              </div>
            </div>
          </div>
          <div className="flex gap-2 px-2">
            <Link to='/update' className="flex-1 rounded-full text-center bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
            Update Pofile
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
