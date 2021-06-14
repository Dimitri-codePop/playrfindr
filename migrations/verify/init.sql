-- Verify PlayrFindr:init on pg

BEGIN;

SELECT * FROM "user" WHERE false;
SELECT * FROM "game" WHERE false;
SELECT * FROM "theme" WHERE false;
SELECT * FROM "category" WHERE false;
SELECT * FROM "message" WHERE false;
SELECT * FROM "event" WHERE false;
SELECT * FROM "editor" WHERE false;
SELECT * FROM "game_has_theme" WHERE false;
SELECT * FROM "game_has_category" WHERE false;
SELECT * FROM "user_has_game" WHERE false;

ROLLBACK;
