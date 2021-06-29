-- Revert PlayrFindr:pinttoint from pg

BEGIN;

ALTER TABLE "event" 
    ALTER COLUMN "number_address" ADD CONSTRAINT pint;



COMMIT;
