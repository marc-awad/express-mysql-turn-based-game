# TP - MySQL

## Installation

Pour démarrer ce projet, suivez les étapes ci-dessous :

1. **Pré-requis** :

   - Assurez-vous d'avoir un client MySQL fonctionnel.
   - Configurez vos informations de connexion MySQL (nom d'utilisateur, hôte, mot de passe) dans le fichier `db.js`.

2. **Créer la base de données et les tables nécessaires dans votre base de données** :

   ```sql
   CREATE DATABASE turnbasedgame;
   ```

   ```sql
   USE turnbasedgame_table;

   CREATE TABLE weapon (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) UNIQUE NOT NULL,
       damage INT NOT NULL
   );

   CREATE TABLE player (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       hp INT NOT NULL,
       weapon_id INT,
       victory_number INT DEFAULT 0,
       FOREIGN KEY (weapon_id) REFERENCES weapon(id)
   );
   ```

3. **Insertion des armes dans la table `weapon`** :

   ```sql
   INSERT INTO weapon (name, damage) VALUES ('Sword', 25);
   INSERT INTO weapon (name, damage) VALUES ('Bow', 15);
   INSERT INTO weapon (name, damage) VALUES ('Axe', 30);
   INSERT INTO weapon (name, damage) VALUES ('Dagger', 20);
   INSERT INTO weapon (name, damage) VALUES ('Staff', 10);
   ```

4. **Installation des dépendances** :

   - Exécutez la commande suivante pour installer les dépendances nécessaires :
     ```bash
     npm i
     ```

5. **Lancer le serveur** :
   - Pour démarrer le serveur, utilisez :
     ```bash
     npm start
     ```

## Fonctionnalités du jeu

### Objectif

Améliorez votre jeu tour par tour avec une interface graphique et des fonctionnalités supplémentaires.

### Fonctionnalités à implémenter :

- **Choix d'arme** :

  - Au début du jeu, le joueur choisit parmi plusieurs armes, chacune ayant des caractéristiques spécifiques.

- **Continuation du jeu** :

  - Si l'utilisateur gagne, un nouveau monstre apparaît.
  - Le joueur récupère un pourcentage fixe (X%) de ses points de vie.

- **Système de score** :
  - Implémentez un système de leaderboard qui affiche un top 3 basé sur le nombre de monstres vaincus et le joueur associé.

### Affichage Front-End :

- **Leaderboard** :

  - Un tableau affichant le top 3 des scores.

- **Interface du jeu** :

  - Un champ pour entrer le nom du joueur.
  - Une section pour afficher le combat en cours.
  - Un affichage du score actuel du joueur.

- **Détails du combat** :
  - Le nom du joueur et ses points de vie (PV).
  - Le nom du monstre et ses PV.
  - Les actions effectuées pendant le combat (attaques, dégâts, etc.).
