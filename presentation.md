## WEEK 9 Full Stack App

Safia, Jo, Nafisa and Mariya
![](https://media.giphy.com/media/xT9IgKCyPpdrwMrl9m/giphy.gif)

---

### Concept 

![](https://i.imgur.com/J8G4Zdq.png)

---

### Inspiration

![](https://i.imgur.com/RzTH6dI.jpg)

###### https://www.glazeddoughnuts.co.uk/
<!-- Inspired by this website selling tasty donuts and the one from the next page offering beautiful Rollerskates, we created an app that combines both. -->

---

### Inspiration

![](https://i.imgur.com/u1NsySy.png)


###### https://rollerskateshop.com/collections/roller-skates-all

---

![](https://media.giphy.com/media/ptriWPfIJ2d5m/giphy.gif)


If you like Donuts, but you love your body, give your body a present - buy Rollerskates!

---

Our e-commerce is for people that don’t want to miss the pleasure of life. 
Offering them cool skates in attractive colours we also give them the joy to eat delicious temptations. 

<img src="https://media.giphy.com/media/3oKIPdQyoFG3RSSOL6/giphy.gif" height=400>

---

### Initial Design Figma

![](https://i.imgur.com/zyBTiv4.png)

---

Demo

https://week9-sjmn.vercel.app/



---

### Schema 
Tables:  
- products
- product details 
- catergories


---

`products` table
| Column      | Type | Constraints |
| ----------- | ----------- |----------- |
| id      | serial       |primary key       |
| name   | text   | not null        |
| description      | text       | not null     |
| price  | integer  |      not null
| name   | text   |not null        |
| category | text   |not null        |

---

`product_details` table
| Column      | Type | Constraints |
| ----------- | ----------- |----------- |
| id      | serial       |primary key       |
| products_id   | integer     |References products(id) |
| size   | VARCHAR(15)        |        |
|colour    |   VARCHAR(50)     |        |

---

`categories` table
| Column      | Type | Constraints |
| ----------- | ----------- |----------- |
|id      | text       | serial primary key       |
| name  | text   | not null |


---

### Concept

Ideas: :bulb: 
- rollerskate/skateboards (with tshirts)
- food/restaurant --> donuts
- pet shop (cats)
- stationary (pens/notebooks etc)
- FAC store

---

![](https://media.giphy.com/media/hqaoAjfNJYmGPxfpaP/giphy.gif)

---

### Day 1 
Tuesday  - 10:00-12:15 
- roles
- deployment
    - generate next.js project
    - create repo & push
    - set up ESLint, Prettier, Cypress testing, PostgresSQL db
    - Deploy with Vercel
- kanban/issues

---

Tuesday - 12:15-1:00 
- brainstorm ideas 
- figma

Tuesday - 2:00-5:00 
- Link pages
- compontents
- landing page

---

### Day 2
Wednesday - 10:00-12:45 
- add record to db
- connection.js
- query db

Wednesday - 12:45-13:00 
- role circles

Wednesday - 14:00-16:30 
- dynamic path
- shopping basket

---

### Day 3
Thursday - 11:30-13:00 (maria absent)
- cookie/shopping basket

Thursday -14:00-17:45 
- cookie/shopping basket
- donuts/filter

---

### Kanban

![](https://i.imgur.com/1PfD4Yk.png)


---

### Estimate vs Velocity

<div style="font-size: 3.0rem;">

| Story | Estimate | Actual |
| --- | --- | --- |
| Homepage | 2 | 1 |
|Products page| 2 | 2 |
| Dynamic path page| 2 | 2 |
| Add Basket button | 2 | 2 |
| Basket page :star:  | 2 | 3 |
| Local Storage :star:| 1 | 3 |  
| Design :star: | 2 | 3 |
| Varient | 2 | -  |
| Filter price | 2 | - |
| Filter category | 2 | - |
| Features on homepage | 2 | - |
| --- | --- | --- |
| TOTAL | 13 | 16 |

</div>

--- 

---

### Acceptance criteria 
Server-rendered with Next.js :heavy_check_mark: 
Hosted on Vercel :heavy_check_mark: 
Data stored in AWS Postgres:heavy_check_mark: 
Homepage with product listings:heavy_check_mark: 
Individual product pages, containing::heavy_check_mark: 
Quantity/colour/variant pickers:negative_squared_cross_mark: 
“Add to basket” button :heavy_check_mark: 
Basket page showing all items being purchased:negative_squared_cross_mark: 
Basket contents saved for future visits :negative_squared_cross_mark: 

---

### Stretch criteria 
Filter products by category :negative_squared_cross_mark: 
Sort products by price:negative_squared_cross_mark: 
“Featured” products on homepage:negative_squared_cross_mark: 

---

## :sparkles: Some light relief :sparkles: 

| :speech_balloon:  "Pimples? Pumples? Pump??"
---
 -- Safia trying to remember the name "Pramp" :rolling_on_the_floor_laughing: 

---

## Challenges


![](https://media.giphy.com/media/URcmhQ5PpztC0/giphy.gif)

---

## Challenges

- couldn't run `db:build` scripts -> forgot the `chmod +x` step
- Conceptualising database tables needed for commerce :shopping_trolley: 
- COOKIES :cookie:
- Next.JS in general :confounded: 

---

## Challenges

- don't forget to return from array.map!

![](https://i.imgur.com/yybtbvb.png)


---

## Things We Learned

- We can upload images from project file path into database (`BYTEA` is more for file upload)
- multiple classNames for styles is complicated: https://fix.code-error.com/how-to-add-multiple-classnames-to-nextjs-elements/

---

## Questions

:question: We kept getting this error: 
```
Requested and resolved page mismatch: 
/../public/images/donut-logo.svg
/public/images/donut-logo.svg
```
This appears even when the logo was showing. :confused:

---

![](https://media.giphy.com/media/1gUWdf8Z8HCxpM8cUR/giphy.gif)



<!-- ### Useful Links

- [Figma Design](https://www.figma.com/file/ZxWzUkPI1qqLoYKhiQ36Sr/Untitled?node-id=1%3A3)
- https://github.com/snipcart/next-snipcart-store/tree/main/src/pages (ECommerce tutorial) 

### Roles
Facilitator - Safia
User Advocate - Mariya
Deployment - Nafisa
Quality - Jo

---

GitHub
```
Co-authored-by: Mariya Peychinova <mariapeichinova@gmail.com>
Co-authored-by: Jo Humphrey <31373245+jamdelion@users.noreply.github.com>
Co-authored-by: Safia Ali <safiaali@hotmail.com>
Co-authored-by: Nafisa Axmed <nafisa@Nafisas-MacBook-Air.local> 

```



---


-->
