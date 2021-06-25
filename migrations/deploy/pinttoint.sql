-- Deploy PlayrFindr:pinttoint to pg

BEGIN;


ALTER TABLE "event" 
    ALTER COLUMN "number_address" TYPE int;


COMMIT;
