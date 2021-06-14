-- Deploy PlayrFindr:function_delete to pg

BEGIN;

CREATE FUNCTION delete_user(id_input int) RETURNS void AS $$
    DELETE FROM "user" WHERE id = id_input
$$ LANGUAGE sql;

CREATE FUNCTION delete_event(id_input int) RETURNS void AS $$
     DELETE FROM "event" WHERE id = id_input
$$ LANGUAGE sql;

CREATE FUNCTION delete_message(id_input int) RETURNS void AS $$
     DELETE FROM "message" WHERE id = id_input
$$ LANGUAGE sql;

CREATE FUNCTION delete_category(id_input int) RETURNS void AS $$
     DELETE FROM "category" WHERE id = id_input
$$ LANGUAGE sql;

CREATE FUNCTION delete_theme(id_input int) RETURNS void AS $$
     DELETE FROM "theme" WHERE id = id_input
$$ LANGUAGE sql;

CREATE FUNCTION delete_game(id_input int) RETURNS void AS $$
     DELETE FROM "game" WHERE id = id_input
$$ LANGUAGE sql;

CREATE FUNCTION delete_editor(id_input int) RETURNS void AS $$
    DELETE FROM "editor" WHERE id = id_input
$$ LANGUAGE sql;

CREATE FUNCTION delete_author(id_input int) RETURNS void AS $$
    DELETE FROM "author" WHERE id = id_input
$$ LANGUAGE sql;

COMMIT;
