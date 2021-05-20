BEGIN;

DROP TABLE IF EXISTS products, product_details, categories CASCADE;

CREATE TABLE categories (
 id SERIAL PRIMARY KEY,
 name VARCHAR(100)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  image text,
  description TEXT,
  price INTEGER,
  category TEXT,
  category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE product_details (
id SERIAL PRIMARY KEY,
 products_id INTEGER REFERENCES products(id),
 size VARCHAR(15),
 colour VARCHAR(50)
);

INSERT INTO categories (name) VALUES 
('skates'),
('donuts');

INSERT INTO products (name, image, description, price, category) VALUES
(
  'Strawberry Rollerskates',
  '/../public/images/Moxi-Lolly-Strawberry-Rollerskates.jpg',
  'You will love these skates' ,
  199,
  'skates'
),
(
  'Poppy Rollerskates',
'/../public/images/Moxi-Lolly-Poppy-Rollerskate.jpg',
'You will love these skates ',
299,
'skates'
),
(
  'Epic Bubblegum Rollerskates',
'/../public/images/skate3.jpg',
'You will love these skates',
150,
'skates'
),
  ('Electic Green Rollerskates ',
'/../public/images/skate4.jpg',
'You will love these skates',
150,
'skates'
),
  ('Caramel Donuts ',
'/../public/images/donut1.jpg',
'You will love these donuts',
3,
'donuts'
),
  ('Strawberry Glazed Donuts',
'/../public/images/donut2.jpg',
'You will love these donuts',
4,
'donuts'
),
  ('Chocolate Sprinkled Donuts',
'/../public/images/donut3.jpg',
'You will love these donuts',
2,
'donuts'
),
 ('Belgian Chocolate Donuts',
'/../public/images/donut4.jpg',
'You will love these donuts',
2,
'donuts'
);

COMMIT;
