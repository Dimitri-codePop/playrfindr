-- Revert PlayrFindr:function_add_event from pg

BEGIN;

CREATE OR REPLACE FUNCTION add_event(event json) RETURNS event AS $$
    INSERT INTO "event"
    ("label", "content", "date", "number_address","address", "town", "max_player", "user_id")
    VALUES(
        (event->>'label'),
        (event->>'content'),
        (event->>'date')::timestamptz,
        (event->>'location'),
        (event->>'max_player')::pint,
        (event->>'user_id')::int
    ) RETURNING *;
$$ LANGUAGE sql;
COMMIT;
