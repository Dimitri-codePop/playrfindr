-- Revert PlayrFindr:view_collection from pg

BEGIN;

DROP VIEW user_collection;


COMMIT;
