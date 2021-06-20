-- Deploy PlayrFindr:add_author to pg

BEGIN;

CREATE FUNCTION add_author(author json) RETURNS author AS $$
    INSERT INTO "author"
    ("firstname", "lastname")
    VALUES(
        (author->>'firstname'),
        (author->>'lastname')
    ) RETURNING *;
$$ LANGUAGE sql;

COMMIT;
