# [CirclePe](https://circlepe.com/) Assignment

This is a simple project which lists all the steps on how CirclePe's App Interface works in just 5 Minutes.

## Techincal Stack used to build the project

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[![Cloudinary](https://img.shields.io/badge/Cloudinary-4285F4?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://circlepe-assignment.vercel.app/)

* This project is built using [Next.js](https://nextjs.org/) for it's Server Side Rendering,
* For ease in styling I've used [Tailwind CSS](https://tailwindcss.com/),
* For Type Safety I've used [TypeScript](https://www.typescriptlang.org/),
* for Fluid Animations I've used [Framer Motion](https://www.framer.com/motion/),
* To store the images I've used [Cloudinary](https://cloudinary.com/),
* The project is hosted on [Vercel](https://vercel.com/).

## To run the project locally

First, run a command to install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The Approach

I've followed a simple approach where I try and make almost every component and setting reusable and scalable, which is the main point of using a Virtual DOM library like React.

I've used a simple folder structure where I've kept all the components with their names in the `Components` folder.

## The Process

First I wrote down all the data in a simple json object where we list all the steps required for [CirclePe](https://circlepe.com/)'s App interface to work.

This ensures that the data can be changed easily and the UI will be updated accordingly without us hardcoding the data in the components.

## How the main data is structured and handles

For maximizing reusability this data was written to parse through the `props` system of React.

I've also added interface interactions like:

* Boolean values to show and hide arrows according to the developer or one's wish.

* Style settings for positioning the arrow(if the `arrowVisible` is set to `true`).

The real reason I choose Next.js was because we can natively render `tsx` format in a field of a JSON object. Like in the `description` field of the JSON object.

I made different components for different types of `description` like:

* `OneLine` for a single line of text,
* `TwoLines` for two lines of text,
* `BulletPoints` for a heading bullet points,

```TypeScript
const steps = [
     {
  id: 1,
  title: 'Step 1',
  description: (
   <TwoLines
    active
    text=""
    textArray={[
     'Tenant selects the property',
     'Tenant selects flexible rent tenure & corresponding amount',
    ]}
    activeIndex={0}
   />
  ),
  image: 'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725031973/how-it-works_oaxb1q.png',
  scaleImage: true,
  scaleImageNumber: 1.5,
  arrowVisible: true,
  arrowImage:
   'https://res.cloudinary.com/da1x0nwv3/image/upload/v1725062349/arrow_fcgub4.png',
  arrowTop: 'top-[200px]',
  arrowLeft: 'left-[-350px]',
 },
];
```

## How Media is handled

I've used Cloudinary to store the images and then used the URL to display the images in the project.

I've also used a dev dependency called [`svgr/webpack`](https://react-svgr.com/docs/next/) to convert the SVGs to React Components.
