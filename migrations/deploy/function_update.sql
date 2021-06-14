-- Deploy PlayrFindr:function_update to pg

BEGIN;

-- XXX Add DDLs here.
CREATE FUNCTION update_user(user_input json) RETURNS "user" AS $$
    UPDATE "user" SET
    "firstname" = user_input->>'firstname', 
    "lastname" = user_input->>'lastname',
    "email" = user_input->>'email',
    "password" = user_input->>'password',
    "picture" = user_input->>'picture',
    "birthdate" = (user_input->>'birthdate')::timestamptz,
    "department_id" = (user_input->>'department_id')::int,
    "is_admin" = (user_input->>'is_admin')::boolean
    WHERE "id" = (user_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;


CREATE FUNCTION update_game(game_input json) RETURNS game AS $$
    UPDATE "game" SET
    "label" = game_input->>'label', 
    "duration" = (game_input->>'duration')::pint,
    "player_min" = (game_input->>'player_min')::pint,
    "player_max" = (game_input->>'player_max')::pint,
    "age_min" = (game_input->>'age_min')::smallint,
    "picture" = game_input->>'picture',
    "year" = (game_input->>'year')::int,
    "describe" = game_input->>'describe',
    "editor_id" = (game_input->>'editor_id')::int
    WHERE "id" = (game_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;


CREATE FUNCTION update_theme(theme_input json) RETURNS theme AS $$
    UPDATE "theme" SET
    "label" = theme_input->>'label'
    WHERE "id" = (theme_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION update_category(category_input json) RETURNS category AS $$
    UPDATE "category" SET
    "label" = category_input->>'label'
    WHERE "id" = (category_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

COMMIT;
