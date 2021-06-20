-- Revert PlayrFindr:add_author from pg

BEGIN;

DROP FUNCTION add_author;

COMMIT;
