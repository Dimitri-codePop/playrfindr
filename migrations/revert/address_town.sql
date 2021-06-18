-- Revert PlayrFindr:address_town from pg

BEGIN;


ALTER TABLE "event" DROP COLUMN "address";
ALTER TABLE "event" DROP COLUMN "number_address";
ALTER TABLE "event" DROP COLUMN "town";
ALTER TABLE "event" ADD COLUMN "location" text;

COMMIT;
