-- Deploy PlayrFindr:update_author to pg

BEGIN;

CREATE OR REPLACE FUNCTION update_author(author_input json) RETURNS author AS $$
    UPDATE "author" SET
    "firstname" = author_input->>'firstname',
    "lastname" = author_input->>'lastname'
    WHERE "id" = (author_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

COMMIT;
