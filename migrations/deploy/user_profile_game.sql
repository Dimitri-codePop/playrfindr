-- Deploy PlayrFindr:user_profile_game to pg

BEGIN;

-- XXX Add DDLs here.
CREATE VIEW user_game AS
SELECT  "user".* AS "user",
ARRAY_AGG( DISTINCT "game"."label")as label 
FROM "user" 
JOIN "user_has_game" ON "user"."id" = "user_has_game"."user_id" 
JOIN "game" ON "game"."id" = "user_has_game"."game_id" 
GROUP BY "user"."id" ;

COMMIT;
