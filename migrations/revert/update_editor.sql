-- Revert PlayrFindr:update_editor from pg

BEGIN;

DROP FUNCTION update_editor;

COMMIT;
