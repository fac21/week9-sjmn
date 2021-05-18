BEGIN;

DROP TABLE IF EXISTS products, product_details, categories CASCADE;

CREATE TABLE categories (
 id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);


CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER,
  category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE product_details (
id SERIAL PRIMARY KEY,
 product_id INTEGER REFERENCES products(id),
 size VARCHAR(15),
 colour VARCHAR(50)
);



COMMIT