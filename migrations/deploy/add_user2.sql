-- Deploy PlayrFindr:add_user2 to pg

BEGIN;
CREATE OR REPLACE FUNCTION add_user("user" json) RETURNS "user" AS $$
WITH inserted_user AS (    
    INSERT INTO "user"
    ("firstname", "lastname", "email", "password", "picture", "birthdate", "department_id", "is_admin")
    VALUES(
        ("user"->>'firstname'),
        ("user"->>'lastname'),
        ("user"->>'email'),
        ("user"->>'password'),
        ("user"->>'picture'),
        ("user"->>'birthdate')::timestamptz,
        ("user"->>'department_id')::int,
        ("user" ->> 'is_admin')::boolean
    ) RETURNING *
), category AS (
    INSERT INTO "user_has_category"
    ("user_id", "category_id")
    SELECT inserted_user.id, category.id::text::int
    FROM inserted_user, json_array_elements("user"->'category_id') AS category(id) RETURNING *
) , genre AS (
    INSERT INTO "user_has_theme"
    ("user_id", "theme_id")
    SELECT inserted_user.id, theme.id::text::int
    FROM inserted_user, json_array_elements("user"->'theme_id') AS theme(id) RETURNING *
) 
SELECT * FROM inserted_user;
$$ LANGUAGE sql;

COMMIT;
