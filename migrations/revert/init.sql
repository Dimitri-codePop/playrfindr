-- Revert PlayrFindr:init from pg

BEGIN;

DROP TABLE "user_has_category";
DROP TABLE "user_has_theme";
DROP TABLE "user_has_event";
DROP TABLE "user_has_game";
DROP TABLE "author_has_game";
DROP TABLE "game_has_category";
DROP TABLE "game_has_theme";
DROP TABLE "author";
DROP TABLE "game";
DROP TABLE "editor";
DROP TABLE "event";
DROP TABLE "message";
DROP TABLE "user";
DROP TABLE "department";
DROP TABLE "theme";
DROP TABLE "category";

COMMIT;
