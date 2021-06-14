-- Revert PlayrFindr:admin from pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE "user"
    DROP COLUMN  "is_admin";

COMMIT;
