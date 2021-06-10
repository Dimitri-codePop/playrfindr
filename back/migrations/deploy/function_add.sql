-- Deploy PlayrFindr:function_add to pg

BEGIN;

CREATE FUNCTION add_editor(editor json) RETURNS editor AS $$
    INSERT INTO "editor"
    ("label")
    VALUES(
        (editor->>'label')
    ) RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION add_event(event json) RETURNS event AS $$
    INSERT INTO "event"
    ("label", "content", "date", "location", "max_player", "user_id")
    VALUES(
        (event->>'label'),
        (event->>'content'),
        (event->>'date')::timestamptz,
        (event->>'location'),
        (event->>'max_player')::pint,
        (event->>'user_id')::int
    ) RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION add_theme(theme json) RETURNS theme AS $$
    INSERT INTO "theme"
    ("label")
    VALUES(
        (theme->>'label')
    ) RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION add_category(category json) RETURNS category AS $$
    INSERT INTO "category"
    ("label")
    VALUES(
        (category->>'label')
    ) RETURNING *;
$$ LANGUAGE sql;



CREATE FUNCTION add_user("user" json) RETURNS "user" AS $$
    INSERT INTO "user"
    ("firstname", "lastname", "email", "password", "picture", "birthdate", "department_id")
    VALUES(
        ("user"->>'firstname'),
        ("user"->>'lastname'),
        ("user"->>'email'),
        ("user"->>'password'),
        ("user"->>'picture'),
        ("user"->>'birthdate')::timestamptz,
        ("user"->>'department_id')::int
    ) RETURNING *;
$$ LANGUAGE sql;

COMMIT;
