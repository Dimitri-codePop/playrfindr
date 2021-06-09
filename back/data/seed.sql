INSERT INTO "author" ("firstname", "lastname") VALUES
('Oleksandr', 'Nevskiy'),
('Oleg', 'Sidorenko'),
('Adrien', 'Hesling'),
('Axel', 'Hesling'),
('Bruno', 'Catala'),
('Ludovic', 'Maublanc'),
('Hervé', 'Marly'),
('Phillipe', 'des Pallières'),
('Tony', 'Rochon'),
('Marc', 'Brunnenkant'),
('Fredéric', 'Moyersoen'),
('Tom', 'van der Bruggen'),
('Jean-Louis', 'Roubira'),
('Marie', 'Cardouat');

INSERT INTO "category" ("label") VALUES 
('Jeux de plateau'),
('Jeux de hasard'),
('Jeux de carte'),
('Jeux de dés'),
('Jeux de mémoire'),
('Jeux de connaissance'),
('Jeux de lettres'),
('Jeux de pions'),
('Jeux de coopération'),
('Jeux de bluff'),
('Jeux de stratégie'),
('Jeux de gestion'),
('Jeux de roles');

INSERT INTO "theme" ("label") VALUES 
('Histoire'),
('Mythologie'),
('Fantastique'),
('Enquetes'),
('Moyen Age'),
('Construction'),
('Stratégie');

INSERT INTO "editor" ("label") VALUES
('Amigo'),
('Libellud'),
('Studio H'),
('Matagot'),
('Blackrock Games'),
('Asmodee');

INSERT INTO "game" ("label","duration", "player_min","player_max","age_min","picture","year","describe","editor_id") VALUES
('Saboteur le duel', 30, 1, 2, 8, 'https://static.fnac-static.com/multimedia/Images/FR/MDM/d0/6d/80/8416720/1520-1/tsp20200309171807/Jeu-de-societe-Gigamic-Saboteur-Le-Duel.jpg', 2015, 'Jeu de mineur', 1),
('Mysterium', 42, 2, 7, 10, 'https://www.zupimages.net/up/21/23/78aw.jpg',2016, 'Mysterium est un jeu d’ambiance innovant, palpitant et immersif.', 2),
('Oriflamme', 25, 3, 5, 10, null, 2020, 'Oriflamme est un jeu de cartes original et addictif de bluff et de décisions tactiques.', 3),
('Prohis', 20, 3, 6, 10, 'https://cdn2.trictrac.net/documents/formats/thumb_300_300/documents/originals/34/d3/1c6cff56029988ce680449d7e6bd6dbcb7a2.jpeg', 2014, 'Jeux de gangster', 5),
('Petits meurtres et fait divers', 45, 4, 7, 14, null, 2007, 'Petit jeu d"enquete humoristique', 6),
('Cyclades', 45, 2, 5, 14, null, 2009, 'Cyclades est un jeu de stratégie sur la myhologie grecque', 4);


INSERT INTO "department" ("number","label") VALUES 
('01', 'Ain'),
(02,	'Aisne'),
(03,	'Allier'),
(04,	'Alpes-de-Haute-Provence'),
(05,	'Hautes-Alpes'),
(06,	'Alpes-Maritimes'),
(07,	'Ardèche'),
(08,	'Ardennes'),
(09,	'Ariège'),
(10,	'Aube'),
(11,	'Aude'),
(12,	'Aveyron'),
(13,	'Bouches-du-Rhône'),
(14,	'Calvados'),
(15,	'Cantal'),
(16,	'Charente'),
(17,	'Charente-Maritime'),
(18,	'Cher'),
(19,	'Corrèze'),
(20,	'Corse'),
(21,	'Côte-d"Or'),
(22,	'Côtes d"Armor'),
(23,	'Creuse'),
(24,	'Dordogne'),
(25,	'Doubs'),
(26,	'Drôme'),
(27,	'Eure'),
(28,	'Eure-et-Loir'),
(29,	'Finistère'),
(30,	'Gard'),
(31,	'Haute-Garonne'),
(32,	'Gers'),
(33,	'Gironde'),
(34,	'Hérault'),
(35,	'Ille-et-Vilaine'),
(36,	'Indre'),
(37,	'Indre-et-Loire'),
(38,	'Isère'),
(39,	'Jura'),
(40,	'Landes'),
(41,	'Loir-et-Cher'),
(42,	'Loire'),
(43,	'Haute-Loire'),
(44,	'Loire-Atlantique'),
(45,	'Loiret'),
(46,	'Lot'),
(47,	'Lot-et-Garonne'),
(48,	'Lozère'),
(49,	'Maine-et-Loire'),
(50,	'Manche'),
(51,	'Marne'),
(52,	'Haute-Marne'),
(53,	'Mayenne'),
(54,	'Meurthe-et-Moselle'),
(55,	'Meuse'),
(56,	'Morbihan'),
(57,	'Moselle'),
(58,	'Nièvre'),
(59,	'Nord'),
(60,	'Oise'),
(61,	'Orne'),
(62,	'Pas-de-Calais'),
(63,	'Puy-de-Dôme'),
(64,	'Pyrénées-Atlantiques'),
(65,	'Hautes-Pyrénées'),
(66,	'Pyrénées-Orientales'),
(67,	'Bas-Rhin'),
(68,	'Haut-Rhin'),
(69,	'Rhône'),
(70,	'Haute-Saône'),
(71,	'Saône-et-Loire'),
(72,	'Sarthe'),
(73,	'Savoie'),
(74,	'Haute-Savoie'),
(75,	'Paris'),
(76,	'Seine-Maritime'),
(77,	'Seine-et-Marne'),
(78,	'Yvelines'),
(79,	'Deux-Sèvres'),
(80,	'Somme'),
(81,	'Tarn'),
(82,	'Tarn-et-Garonne'),
(83,	'Var'),
(84,	'Vaucluse'),
(85,	'Vendée'),
(86,	'Vienne'),
(87,	'Haute-Vienne'),
(88,	'Vosges'),
(89,	'Yonne'),
(90,	'Territoire de Belfort'),
(91,	'Essonne'),
(92,	'Hauts-de-Seine'),
(93,	'Seine-St-Denis'),
(94,	'Val-de-Marne'),
(95,	'Val-D"Oise'),
(971, 'Guadeloupe'),
(972, 'Martinique'),
(973, 'Guyane'),
(974, 'La Réunion'),
(976,	'Mayotte');


INSERT INTO "user"("firstname","lastname","email","password", "picture", "birthdate", "department_id") VALUES
('Florence','Monserrat', 'flo@gmail.com', '123456', null, '1993-02-23', 1),
('Michel', 'Pomme', 'michel@yahoo.fr', 'azerty', null, '1999-06-29', 20);

INSERT INTO "event"("label", "content", "date", "location", "max_player", "user_id") VALUES
('Partie de Cyclade', 'Je vous propose une partie de cyclade a 5 joueurs', '2021-06-10','80 Avenue des lilas, Paris, 75003', 5, 1);

INSERT INTO "game_has_theme"("game_id", "theme_id") VALUES
(1, 7),
(2, 3),
(2, 4),
(3, 3),
(3, 7),
(4, 6),
(4, 7),
(5, 6),
(6, 2),
(6, 6),
(6, 7);

INSERT INTO "message" ("content", "date", "recipient_id", "user_id") VALUES
('Bonjour, je souhaiterai jouer avec vous', '2021-06-09 13:29:50', 2, 1);


INSERT INTO "game_has_category"("game_id", "category_id") VALUES
(1, 3),
(1, 11),
(2, 1),
(2, 5),
(2, 9),
(3, 3),
(3, 10),
(4, 3),
(4, 11),
(4, 12),
(5, 9),
(5, 13),
(6, 1),
(6, 11),
(6, 12);


INSERT INTO "author_has_game"("author_id", "game_id") VALUES
(1, 2),
(2, 2),
(3, 3),
(4, 3),
(5, 6),
(6, 6),
(7, 5),
(9, 4),
(10, 4),
(11, 1);

INSERT INTO "user_has_game" ("user_id", "game_id")VALUES
(1,1),
(1,6),
(1,5),
(1,4),
(2,1),
(2,2),
(2,3),
(2,4),
(2,6);

INSERT INTO "user_has_event" ("user_id", "event_id")VALUES
(2, 1),
(1,1);

INSERT INTO "user_has_theme" ("user_id", "theme_id") VALUES
(1,1),
(1,7),
(1,5),
(1,4),
(2,1),
(2,2),
(2,3),
(2,4),
(2,6);

INSERT INTO "user_has_category"("user_id", "category_id") VALUES
(1,1),
(1,7),
(1,5),
(1,4),
(1,10)
(2,11),
(2,2),
(2,3),
(2,4),
(2,6);