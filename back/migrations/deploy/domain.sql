-- Deploy PlayrFindr:domain to pg

BEGIN;

CREATE DOMAIN url AS text
    CHECK (VALUE ~ 'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,255}\.[a-z]{2,9}\y([-a-zA-Z0-9@:%_\+.,~#?!&>//=]*)$');
COMMENT ON DOMAIN url IS 'match URLs (http or https)';

CREATE DOMAIN pint AS smallint
    CHECK (VALUE > 0);
COMMENT ON DOMAIN pint IS 'only positive integer is accepted';


CREATE DOMAIN email AS text
    CHECK (VALUE ~ '^[a-zA-Z0-9.!#$%&’*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
COMMENT ON DOMAIN email IS 'Security email check';

ALTER TABLE "user"
    ALTER COLUMN "picture" TYPE url,
    ALTER COLUMN "email" TYPE email;

ALTER TABLE "game" 
    ALTER COLUMN "picture" TYPE url;

ALTER TABLE "game" 
    ALTER COLUMN "year" TYPE pint,
    ALTER COLUMN "duration" TYPE pint,
    ALTER COLUMN "player_min" TYPE pint,
    ALTER COLUMN "player_max" TYPE pint;


ALTER TABLE "event"
    ALTER COLUMN "max_player" TYPE pint;
    
COMMIT;
