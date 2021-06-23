-- Revert PlayrFindr:update_author from pg

BEGIN;

DROP FUNCTION update_author;

COMMIT;
