-- Revert PlayrFindr:view_profile from pg

BEGIN;

DROP VIEW user_profile;
-- XXX Add DDLs here.

COMMIT;
