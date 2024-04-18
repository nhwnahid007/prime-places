import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <Helmet>
        <title>Gallery</title>
      </Helmet>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://i.ibb.co/SfCB68v/g1.jpg"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/cTfRcLG/g2.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/6vBB7JQ/g3.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/ZGr0j5V/g4.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/DtyKnFk/g5.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/KFQ5dSJ/g6.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/F46r0CL/g7.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/HXrXyXK/g8.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/kgdz3Q5/g10.jpg"
        />
        <img
          src="https://i.ibb.co/bF5YGHK/g9.jpg"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
};

export default Gallery;
