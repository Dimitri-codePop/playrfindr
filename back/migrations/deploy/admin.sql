-- Deploy PlayrFindr:admin to pg

BEGIN;

-- XXX Add DDLs here.

ALTER TABLE "user"
    ADD  "is_admin" BOOLEAN DEFAULT FALSE;

COMMIT;
