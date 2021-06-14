-- Revert PlayrFindr:function_delete from pg

BEGIN;

DROP FUNCTION delete_user;

DROP FUNCTION delete_event;

DROP FUNCTION delete_message;

DROP FUNCTION delete_category;

DROP FUNCTION delete_theme;

DROP FUNCTION delete_game;

DROP FUNCTION delete_editor;

DROP FUNCTION delete_author;


COMMIT;
