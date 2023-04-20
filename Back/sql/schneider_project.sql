BEGIN; 

DROP TABLE IF EXISTS "documentation_category",
                     "documentation_file",
                     "download_category",
                     "download_file",
                     "faq_answer",
                     "faq_category",
                     "faq_ask",
                     "role",
                     "product",
                     "product_order",
                     "order_history";
                     

CREATE TABLE "documentation_category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "documentation_category_name" TEXT NOT NULL 
);

CREATE TABLE "documentation_file" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "documentation_file_name" TEXT NOT NULL, 
    "documentation_file_format" TEXT NOT NULL,
    "documentation_file_img" BYTEA NOT NULL, 
    "documentation_file_size" INT NOT NULL,
    "documentation_category_id" INT REFERENCES "documentation_category"("id")
);  

CREATE TABLE "download_category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "download_category_name" TEXT NOT NULL
);

CREATE TABLE "download_file" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "download_file_name" TEXT NOT NULL, 
    "download_file_format" TEXT NOT NULL, 
    "download_file_img" BYTEA NOT NULL,
    "downdload_file_size" INT NOT NULL, 
    "download_category_id" INT REFERENCES "download_category"("id")
);

CREATE TABLE "faq_answer" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "answer" TEXT NOT NULL
);

CREATE TABLE "faq_category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "faq_category_name" TEXT NOT NULL
);

CREATE TABLE "faq_ask" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "ask" TEXT NOT NULL, 
    "faq_answer_id" INT REFERENCES "faq_answer"("id"),
    "faq_category_id" INT REFERENCES "faq_category"("id")
);

CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "label" TEXT NOT NULL
);

CREATE TABLE "product" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "product_name" TEXT NOT NULL, 
    "product_img" BYTEA NOT NULL, 
    "product_description" TEXT NOT NULL, 
    "product_price" INT NOT NULL
); 


CREATE TABLE "product_order" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "product_order_quantity" INT NOT NULL, 
    "product_oder_total_amount" INT NOT NULL, 
    "product_order_date_purchase" DATE NOT NULL,
    "product_id" INT REFERENCES "product"("id")
);

CREATE TABLE "order_history" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "product_order_id" INT REFERENCES "product_order"("id")
);

COMMIT; 