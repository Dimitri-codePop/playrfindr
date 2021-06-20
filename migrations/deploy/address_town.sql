-- Deploy PlayrFindr:address_town to pg

BEGIN;

ALTER TABLE "event"
    DROP COLUMN "location";

ALTER TABLE "event" ADD COLUMN "address" text;
ALTER TABLE "event" ADD COLUMN "number_address" pint;
ALTER TABLE "event" ADD COLUMN "town" text;

COMMIT;
