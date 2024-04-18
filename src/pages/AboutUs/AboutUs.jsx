import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div data-aos="flip-right"

    data-aos-delay="50"
    data-aos-duration="1000"
    
    data-aos-anchor-placement="top-center" className="min-h-screen bg-gray-100">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className=" animate__animated animate__rotateIn text-4xl font-bold text-center mb-8">
          About Prime Place
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg leading-loose">
              &quot;Prime Place is your premier destination for luxury real
              estate. We specialize in curating exclusive properties that embody
              sophistication, elegance, and unparalleled quality. At Prime
              Place, we are passionate about redefining luxury living and
              elevating the standard of real estate excellence. Our dedication
              to providing exceptional service and cultivating lasting
              relationships with our clients sets us apart in the industry. Our
              journey began with a vision to create a platform where discerning
              individuals could find their dream homes, tailored to their unique
              preferences and desires. With a focus on exceptional
              craftsmanship, breathtaking design, and unmatched attention to
              detail, Prime Place has quickly become synonymous with luxury
              living. Our mission is to exceed expectations and deliver beyond
              imagination. We strive to create not just homes, but lifestyles
              that inspire and enchant. With a commitment to innovation and
              excellence, we are constantly pushing the boundaries of what is
              possible in luxury real estate. At Prime Place, our values are
              rooted in integrity, professionalism, and a relentless pursuit of
              perfection. We believe in transparency, honesty, and putting our
              clients&apos; needs first in every interaction. As we continue to
              grow and expand our reach, our goal remains unwavering: to be the
              premier destination for luxury real estate worldwide. We are proud
              of our achievements and grateful for the trust our clients have
              placed in us. With Prime Place, your dream home is just a step
              away.&quot;
            </p>
          </div>
          <img
            src="https://i.ibb.co/J7pfp5C/primeplaces.jpg"
            alt="Prime Place Company Image"
            className="rounded-lg shadow-lg lg:w-full"
          />
        </div>
        <div className="mt-8 text-center">
          <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
              <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
                Our team
              </h1>
              <section className="p-6">
                <div className="container max-w-xl mx-auto">
                  <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
                    <img
                      src="https://i.ibb.co/qk1htBS/myself.jpg"
                      alt=""
                      className="w-20 h-20 rounded-full dark:bg-gray-500"
                    />
                    <blockquote className="max-w-lg text-lg italic font-medium text-center">
                    <p className="max-w-2xl text-center dark:text-gray-600">
                At Prime Place, we are proud to have a team of dedicated
                professionals who are committed to excellence in every aspect of
                luxury real estate. Our team brings together a wealth of
                expertise, passion, and industry knowledge to deliver
                unparalleled service to our clients.
              </p>
                    </blockquote>
                    <div className="text-center dark:text-gray-600">
                      <p className="font-extrabold">Md Nahidul Islam</p>
                      <p>CEO of Prime Places</p>
                    </div>
                    
                  </div>
                </div>
              </section>
              
              <div className="flex flex-row flex-wrap-reverse justify-center">
                <div className="flex flex-col justify-center m-8 text-center">
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                    src="https://source.unsplash.com/100x100/?portrait?0"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Leroy Jenkins
                  </p>
                  <p className="dark:text-gray-600">Visual Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                    src="https://source.unsplash.com/100x100/?portrait?1"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Leroy Jenkins
                  </p>
                  <p className="dark:text-gray-600">Visual Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                    src="https://source.unsplash.com/100x100/?portrait?2"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Leroy Jenkins
                  </p>
                  <p className="dark:text-gray-600">Visual Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                    src="https://source.unsplash.com/100x100/?portrait?3"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Leroy Jenkins
                  </p>
                  <p className="dark:text-gray-600">Visual Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                    src="https://source.unsplash.com/100x100/?portrait?4"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Leroy Jenkins
                  </p>
                  <p className="dark:text-gray-600">Visual Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                    src="https://source.unsplash.com/100x100/?portrait?5"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Leroy Jenkins
                  </p>
                  <p className="dark:text-gray-600">Visual Designer</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
