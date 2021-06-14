-- Revert PlayrFindr:function_add from pg

BEGIN;

DROP FUNCTION add_editor;

DROP FUNCTION add_event;

DROP FUNCTION add_theme;

DROP FUNCTION add_category;

DROP FUNCTION add_user;

COMMIT;
