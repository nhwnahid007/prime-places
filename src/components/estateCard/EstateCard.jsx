import { Link } from "react-router-dom";

const EstateCard = ({ estateData }) => {
  const { id,image, estate_title, price, location } = estateData;
  return (
    <div className="w-lg relative h-[700px]  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
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
          <p className="dark:text-gray-800">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
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
