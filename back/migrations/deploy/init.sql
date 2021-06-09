-- Deploy PlayrFindr:init to pg

BEGIN;

CREATE TABLE "category" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" varchar(30) NOT NULL UNIQUE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "theme" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" varchar(40) NOT NULL UNIQUE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "department" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "number" smallint NOT NULL UNIQUE,
    "label" text NOT NULL UNIQUE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "user" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" varchar(20) NOT NULL,
    "lastname" varchar(20) NOT NULL,
    "email" text NOT NULL UNIQUE,
    "password" text NOT NULL,
    "picture" text,
    "birthdate" timestamptz NOT NULL,
    "department_id" int NOT NULL REFERENCES "department"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "message" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" text NOT NULL,
    "date" timestamptz DEFAULT now(),
    "recipient_id" int NOT NULL,
    "user_id" int NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);


CREATE TABLE "event" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text NOT NULL,
    "content" text NOT NULL,
    "date" timestamptz NOT NULL,
    "location" text NOT NULL,
    "max_player" smallint NOT NULL,
    "user_id" int NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "editor" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" varchar(35) NOT NULL UNIQUE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "game" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text NOT NULL UNIQUE,
    "duration" smallint NOT NULL,
    "player_min" smallint NOT NULL,
    "player_max" smallint NOT NULL,
    "age_min" smallint NOT NULL,
    "picture" text,
    "year" smallint NOT NULL,
    "describe" text NOT NULL,
    "editor_id" int NOT NULL REFERENCES "editor"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "author" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" varchar(20) NOT NULL,
    "lastname" varchar(30) NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "game_has_theme" (
    "game_id" int NOT NULL REFERENCES "game"("id"),
    "theme_id" int NOT NULL REFERENCES "theme"("id"),
    PRIMARY KEY ("game_id", "theme_id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "game_has_category" (
    "game_id" int NOT NULL REFERENCES "game"("id"),
    "category_id" int NOT NULL REFERENCES "category"("id"),
    PRIMARY KEY ("game_id", "category_id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "author_has_game" (
    "game_id" int NOT NULL REFERENCES "game"("id"),
    "author_id" int NOT NULL REFERENCES "author"("id"),
    PRIMARY KEY("game_id", "author_id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "user_has_game" (
    "user_id" int NOT NULL REFERENCES "user"("id"),
    "game_id" int NOT NULL REFERENCES "game"("id"),
    PRIMARY KEY ("user_id", "game_id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "user_has_event" (
     "user_id" int NOT NULL REFERENCES "user"("id"),
     "event_id" int NOT NULL REFERENCES "event"("id"),
     PRIMARY KEY ("user_id", "event_id"),
     "created_at" timestamptz NOT NULL DEFAULT now(),
     "updated_at" timestamptz,
     "deleted_at"timestamptz
);


CREATE TABLE "user_has_theme" (
    "user_id" int NOT NULL REFERENCES "user"("id"),
    "theme_id" int NOT NULL REFERENCES "theme"("id"),
    PRIMARY KEY ("user_id", "theme_id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "user_has_category" (
    "user_id" int NOT NULL REFERENCES "user"("id"),
    "category_id" int NOT NULL REFERENCES "category"("id"),
    PRIMARY KEY ("user_id", "category_id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

COMMIT;
