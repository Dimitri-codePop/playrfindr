-- Revert PlayrFindr:update_event from pg

BEGIN;

DROP FUNCTION update_event;

COMMIT;
