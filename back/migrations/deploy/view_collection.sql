-- Deploy PlayrFindr:view_collection to pg

BEGIN;
CREATE VIEW user_collection AS
SELECT "user".*,
	ARRAY_AGG("game"."label") as "game"
	FROM "user"
	JOIN "user_has_game"
	ON "user"."id" = "user_has_game"."user_id"
	JOIN "game" on "game"."id" = "user_has_game"."game_id"
	GROUP BY "user"."id";

COMMIT;
