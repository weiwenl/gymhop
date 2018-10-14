CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS entryPasses (
    id SERIAL PRIMARY KEY,
    gym_name TEXT,
    quantity INTEGER,
    expiry_date DATE,
    user_id INTEGER --user's id
);

-- CREATE TABLE IF NOT EXISTS gymInfos (
--     id SERIAL PRIMARY KEY,
--     address TEXT,
--     contact character varying(8),
--     website TEXT,
--     nearestMRT TEXT
-- );
