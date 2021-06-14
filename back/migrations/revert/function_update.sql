-- Revert PlayrFindr:function_update from pg

BEGIN;

-- XXX Add DDLs here.

-- XXX Add DDLs here.
DROP FUNCTION update_user;

DROP FUNCTION update_game;


DROP FUNCTION update_theme;

DROP FUNCTION update_category;


COMMIT;
