-- Deploy PlayrFindr:view_profile to pg

BEGIN;

-- XXX Add DDLs here.
CREATE VIEW "user_profile" AS
SELECT "user".*, 
	ARRAY_AGG(DISTINCT "theme"."label") as theme, 
	ARRAY_AGG (DISTINCT "category"."label") as category, 
	"department"."number" as department
	FROM "user" 
	JOIN "department" ON "user"."department_id" = "department"."id" 
	JOIN "user_has_theme" ON "user"."id" = "user_has_theme"."user_id"
	JOIN "theme" ON "user_has_theme"."theme_id" = "theme"."id"
	JOIN "user_has_category" ON "user"."id" = "user_has_category"."user_id"
	JOIN "category" ON "user_has_category"."category_id" = "category"."id"
	GROUP BY "user"."id", "department"."number";
    
COMMIT;
