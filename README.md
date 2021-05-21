# Week 9: Next.js

Our [project brief](https://learn.foundersandcoders.com/course/syllabus/full-stack-app/project/) this week was to use Next.js to build an e-commerce website.

## Team

- Facilitator - [Safia](https://github.com/fi-ya)
- User Advocate - [Mariya](https://github.com/mariyapeychinova)
- Deployment - [Nafisa](https://github.com/nafisa20)
- Quality - [Jo](https://github.com/jamdelion)

## Concept

We decided on selling donuts and rollerskates. 🛹 🍩

## Acceptance criteria :

-Server-rendered with Next.js
-Hosted on Vercel
-Data stored in AWS Postgres
-Homepage with product listings
-Individual product pages, containing:
-“Add to basket” button
-Basket page showing all items being purchased
-Basket contents saved for future visits

## Stretch:

-Quantity/colour/variant pickers

## Screenshots:

![image]()

Design

![image](https://user-images.githubusercontent.com/31373245/119019505-29f32b80-b995-11eb-9854-1e0941d75d31.png)

## Known Issues

- :heavy_multiplication_x: -Basket contents saved for future visits and adding to basket
- :heavy_multiplication_x: -Cookies need to be refactored to local storage

## Getting Started

After cloning first run `npm install`.
Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
