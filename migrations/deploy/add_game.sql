-- Deploy PlayrFindr:add_game to pg

BEGIN;

CREATE OR REPLACE FUNCTION add_game("game" json) RETURNS "game" AS $$
WITH inserted_game AS (    
    INSERT INTO "game"
    ("label", "duration", "player_min", "player_max", "age_min", "picture", "year", "describe", "editor_id")
    VALUES(
        ("game"->>'label'),
        ("game"->>'duration')::pint,
        ("game"->>'player_min')::pint,
        ("game"->>'player_max')::pint,
        ("game"->>'age_min')::smallint,
        ("game"->>'picture'),
        ("game"->>'year')::pint,
        ("game"->>'describe'),
        ("game"->>'editor_id')::int
    ) RETURNING *
), category AS (
    INSERT INTO "game_has_category"
    ("game_id", "category_id")
    SELECT inserted_game.id, category.id::text::int
    FROM inserted_game, json_array_elements("game"->'category_id') AS category(id) RETURNING *
), genre AS (
    INSERT INTO "game_has_theme"
    ("game_id", "theme_id")
    SELECT inserted_game.id, theme.id::text::int
    FROM inserted_game, json_array_elements("game"->'theme_id') AS theme(id) RETURNING *
), author AS (
    INSERT INTO "author_has_game"
    ("game_id", "author_id")
    SELECT inserted_game.id, author.id::text::int
    FROM inserted_game, json_array_elements("game"->'author_id') AS author(id) RETURNING *
)

SELECT * FROM inserted_game;
$$ LANGUAGE sql;

COMMIT;
