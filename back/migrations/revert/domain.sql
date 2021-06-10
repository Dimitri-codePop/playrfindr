-- Revert PlayrFindr:domain from pg

BEGIN;


ALTER TABLE "user"
    ALTER COLUMN "picture" TYPE text,
    ALTER COLUMN "email" TYPE text;

ALTER TABLE "game" 
    ALTER COLUMN "picture" TYPE text;

ALTER TABLE "game" 
    ALTER COLUMN "year" TYPE smallint,
    ALTER COLUMN "duration" TYPE smallint,
    ALTER COLUMN "player_min" TYPE smallint,
    ALTER COLUMN "player_max" TYPE smallint;


ALTER TABLE "event"
    ALTER COLUMN "max_player" TYPE smallint;

DROP DOMAIN url;

DROP DOMAIN pint;

DROP DOMAIN email;

COMMIT;
