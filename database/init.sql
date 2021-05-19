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
  category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE product_details (
id SERIAL PRIMARY KEY,
 products_id INTEGER REFERENCES products(id),
 size VARCHAR(15),
 colour VARCHAR(50)
);

INSERT INTO categories (name) VALUES (
  ('skates')

  );

INSERT INTO products (name, image, description, price) VALUES (
  'Moxi Lolly Strawberry Rollerskates',
  '/../public/images/Moxi-Lolly-Strawberry-Rollerskates.jpg',
  'The Moxi Lolly Strawberry Rollerskates are the crème de la crème of the rollerskating world. Moxi was born from the passion of famous Los Angeles roller derby player Michelle Steilen (Estro Jen). She wanted to take rollerskating back to a place where it was cool. It is safe to say; mission accomplished.' ,
  299
);

-- INSERT INTO product_details VALUES (name, description, price)  (
--   '' ,
--   ''
-- )

COMMIT;
