import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
const EstateCard = ({ estateData }) => {
  const { id,image, estate_title, price, location,status,stars } = estateData;
  return (
    <div className="w-lg relative h-[600px]  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="fle flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {estate_title}
          </h2>
          <p className="flex text-xl items-center dark:text-gray-800">
          <IoLocationSharp /> {location}
          </p>
          <p className=" text-xl dark:text-gray-800">
          <span className="font-bold">Price: </span>{price}
          <p>
              </p>
             <div className="flex items-center justify-between">
                  <p className=" text-xl dark:text-gray-800">
                  {status} 
                  </p>
                  <p className="flex items-center justify-center text-xl dark:text-gray-800">
                  {stars} <FaStar className="text-orange-400" />
                  </p>
             </div>
          </p>
        </div>
        <div className="">
            <Link to={`/property/${id}`}
              type="button"
              className="flex justify-center items-center text-white text-xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 absolute bottom-4 left-1/3 transform -translate-x-1/2"
            >
              view property
            </Link>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
