# Prime Places

These features and characteristics position Prime Places as a premier destination for luxury estate seekers, offering unparalleled properties, services, and experiences in the world of upscale real estate.

## [Prime Places](https://prime-places.web.app)

Check out our website: [https://prime-places.web.app](https://prime-places.web.app).

**Features and characteristics of "Prime Places," a luxury estate website:**

- **Exclusive Property Listings**: Prime Places offers an exclusive selection of luxury estates, including high-end villas, penthouses, and upscale residences in premium locations worldwide.
- **Luxurious Amenities**: Each property showcased on Prime Places boasts luxurious amenities such as private pools, spa facilities, landscaped gardens, smart home technology, and panoramic views.
- **Personalized Concierge Services**: Prime Places provides personalized concierge services to cater to the discerning needs of its clients, offering assistance with property viewings, interior design, relocation services, and bespoke lifestyle experiences.
- **Expert Real Estate Guidance**: With a team of experienced real estate agents and industry experts, Prime Places offers professional guidance and advice to help clients navigate the luxury real estate market with confidence and ease.
- **Impeccable Customer Experience**: Prime Places is committed to delivering an impeccable customer experience, from the initial inquiry to the final closing, ensuring that every client receives personalized attention, transparency, and integrity throughout the buying or renting process.

## To run the development server locally, follow these steps:

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation and Running

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/nhwnahid007/prime-places.git
    cd prime-places
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env.local` File:**

    Create a `.env.local` file in the root directory of your project and add the following content:

    ```plaintext
    VITE_APIKEY= your-firebase-apiKey
    VITE_AUTHDOMAIN= your-firebase-authDomain
    VITE_PROJECTID= your-firebase-projectId
    VITE_STORAGEBUCKET= your-firebase-storageBucket
    VITE_MESSAGINGSENDERID= your-firebase-messagingSenderId
    VITE_APPID= your-firebase-appId
    ```

    Replace the placeholders (`your-firebase-apiKey`, `your-firebase-authDomain`, etc.) with your actual Firebase configuration values.

4. **Run the Development Server:**
    ```bash
    npm run dev
    ```

This will start the server.

### Additional Commands

- **Build for Production:**
    ```bash
    npm run build
    ```

- **Run Tests:**
    ```bash
    npm test
    ```

## Packages used:

- [Swipper Slider](https://swiperjs.com/)
- [Animate CSS](https://animate.style/)
- [AOS package](https://michalsnik.github.io/aos/)
