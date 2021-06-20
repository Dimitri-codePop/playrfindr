-- Deploy PlayrFindr:add_game_function to pg

BEGIN;

BEGIN;

CREATE FUNCTION add_game(game json) RETURNS game AS $$
INSERT INTO
    "game" (
        "label",
        "duration",
        "player_min",
        "player_max",
        "age_min",
        "picture",
        "year",
        "describe",
        "editor_id"
    )
VALUES
    (
        (game ->> 'label'),
        (game ->> 'duration')::pint,
        (game ->> 'player_min')::pint,
        (game ->> 'player_max')::pint,
        (game ->> 'age_min')::pint,
        (game ->> 'picture'),
        (game ->> 'year')::pint,
        (game ->> 'describe'),
        (game ->> 'editor_id')::int
    ) RETURNING *;

$$ LANGUAGE sql;


COMMIT;


COMMIT;
