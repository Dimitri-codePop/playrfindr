-- Deploy PlayrFindr:update_event to pg

BEGIN;

CREATE FUNCTION update_event(event_input json) RETURNS event AS $$
    UPDATE "event" SET
    "label" = event_input->>'label',
    "content" = event_input->>'content',
    "date" = (event_input->>'date')::timestamptz,
    "number_address" = (event_input->>'number_address')::pint,
    "address" = event_input->>'address',
    "town" = event_input->>'town',
    "max_player" = (event_input->>'max_player')::pint,
    "user_id" = (event_input->>'user_id')::int
    WHERE "id" = (event_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

COMMIT;
