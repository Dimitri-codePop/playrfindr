-- Deploy PlayrFindr:update_editor to pg

BEGIN;

CREATE FUNCTION update_editor(editor_input json) RETURNS editor AS $$
    UPDATE "editor" SET
    "label" = editor_input->>'label'
    WHERE "id" = (editor_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

COMMIT;
