import { useLoaderData, useParams } from "react-router-dom";

const DetailsProperty = () => {
  const properties = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(properties);
  const property = properties.find((property) => property.id === idInt);

  const { image, estate_title, description, price, area, location,status,facilities } = property;

  return (
    <div
    data-aos="zoom-out-down"

    data-aos-delay="50"
    data-aos-duration="1000"
    
    data-aos-anchor-placement="top-center"
      className=" text-white"
      style={{
        background:
          "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)",
      }}
    >
      <div className="container min-h-screen  mx-auto lg:flex lg:justify-center px-5 py-24 lg:items-center gap-20">
        <div className="flex lg:w-2/3 justify-center items-center">
          <img
            className="rounded-2xl w-96 lg:w-[600px] mb-10 object-cover object-center"
            alt="hero"
            src={image}
          />
        </div>
        <div className="text-lg lg:mb-10 text-gray-800">
          <h1 className="my-4 text-2xl lg:text-3xl text-black font-bold">{estate_title}</h1>
          <p className="text-sm mb-8">{description}</p>
          <p>
           <span className="font-bold">Location:</span> {location}
          </p>
          <p>
           <span className="font-bold">Price:</span> {price}
          </p>
          <p>
           <span className="font-bold">Status:</span> {status}
          </p>
          <p>
           <span className="font-bold">Area:</span> {area}
          </p>
          <p>
           <span className="font-bold">Facilities:</span> #{facilities[0]} # {facilities[1]} {facilities[2]}
          </p>
          <div className="flex justify-center mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProperty;
