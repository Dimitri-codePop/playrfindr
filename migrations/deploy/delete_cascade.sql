-- Deploy PlayrFindr:delete_cascade to pg

BEGIN;
ALTER TABLE "user_has_theme" DROP CONSTRAINT "user_has_theme_theme_id_fkey";
ALTER TABLE "user_has_theme" ADD CONSTRAINT "user_has_theme_theme_id_fkey" FOREIGN KEY ("theme_id") REFERENCES "theme"("id") ON DELETE CASCADE;
ALTER TABLE "user_has_theme" DROP CONSTRAINT "user_has_theme_user_id_fkey";
ALTER TABLE "user_has_theme" ADD CONSTRAINT "user_has_theme_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "user_has_category" DROP CONSTRAINT "user_has_category_category_id_fkey";
ALTER TABLE "user_has_category" ADD CONSTRAINT "user_has_category_category_id_fkey" FOREIGN KEY (category_id) REFERENCES "category"("id") ON DELETE CASCADE;
ALTER TABLE "user_has_category" DROP CONSTRAINT "user_has_category_user_id_fkey";
ALTER TABLE "user_has_category" ADD CONSTRAINT "user_has_category_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "user" DROP CONSTRAINT "user_department_id_fkey";
ALTER TABLE "user" ADD CONSTRAINT "user_department_id_fkey" FOREIGN KEY (department_id) REFERENCES "department"("id") ON DELETE CASCADE;


ALTER TABLE "user_has_game" DROP CONSTRAINT "user_has_game_game_id_fkey";
ALTER TABLE "user_has_game" ADD CONSTRAINT "user_has_game_game_id_fkey" FOREIGN KEY (game_id) REFERENCES "game"("id") ON DELETE CASCADE;
ALTER TABLE "user_has_game" DROP CONSTRAINT "user_has_game_user_id_fkey";
ALTER TABLE "user_has_game" ADD CONSTRAINT "user_has_game_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "message" DROP CONSTRAINT "message_user_id_fkey";
ALTER TABLE "message" ADD CONSTRAINT "message_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "user"("id") ON DELETE CASCADE;


ALTER TABLE "event" DROP CONSTRAINT "event_user_id_fkey";
ALTER TABLE "event" ADD CONSTRAINT "event_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "game_has_theme" DROP CONSTRAINT "game_has_theme_game_id_fkey";
ALTER TABLE "game_has_theme" ADD CONSTRAINT "game_has_theme_game_id_fkey" FOREIGN KEY (game_id) REFERENCES "game"("id") ON DELETE CASCADE;
ALTER TABLE "game_has_theme" DROP CONSTRAINT "game_has_theme_theme_id_fkey";
ALTER TABLE "game_has_theme" ADD CONSTRAINT "game_has_theme_theme_id_fkey" FOREIGN KEY (theme_id) REFERENCES "theme"("id") ON DELETE CASCADE;


ALTER TABLE "game_has_category" DROP CONSTRAINT "game_has_category_category_id_fkey";
ALTER TABLE "game_has_category" ADD CONSTRAINT "game_has_category_category_id_fkey" FOREIGN KEY (category_id) REFERENCES "category"("id") ON DELETE CASCADE;
ALTER TABLE "game_has_category" DROP CONSTRAINT "game_has_category_game_id_fkey";
ALTER TABLE "game_has_category" ADD CONSTRAINT "game_has_category_game_id_fkey" FOREIGN KEY (game_id) REFERENCES "game"("id") ON DELETE CASCADE;



ALTER TABLE "author_has_game" DROP CONSTRAINT "author_has_game_game_id_fkey";
ALTER TABLE "author_has_game" ADD CONSTRAINT "author_has_game_game_id_fkey" FOREIGN KEY (game_id) REFERENCES "game"("id") ON DELETE CASCADE;
ALTER TABLE "author_has_game" DROP CONSTRAINT "author_has_game_author_id_fkey";
ALTER TABLE "author_has_game" ADD CONSTRAINT "author_has_game_author_id_fkey" FOREIGN KEY (author_id) REFERENCES "author"("id") ON DELETE CASCADE;


ALTER TABLE "user_has_event" DROP CONSTRAINT "user_has_event_event_id_fkey";
ALTER TABLE "user_has_event" ADD CONSTRAINT "user_has_event_event_id_fkey" FOREIGN KEY (event_id) REFERENCES "event"("id") ON DELETE CASCADE;
ALTER TABLE "user_has_event" DROP CONSTRAINT "user_has_event_user_id_fkey";
ALTER TABLE "user_has_event" ADD CONSTRAINT "user_has_event_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "user"("id") ON DELETE CASCADE;
COMMIT;
