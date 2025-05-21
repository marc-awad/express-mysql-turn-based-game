# 🕹️ Turn-Based Game – MySQL Edition

A simple turn-based battle game using Node.js and MySQL, featuring a weapon system, combat logic, and a dynamic leaderboard.

## 🔧 Installation

Follow the steps below to get started:

### 1. Prerequisites
- Ensure you have MySQL installed and running.
- Configure your MySQL credentials (`user`, `host`, `password`) in the `db.js` file.

### 2. Database Setup
Create the database and necessary tables:
```sql
CREATE DATABASE turnbasedgame;
USE turnbasedgame;

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

### 3. Seed Initial Weapons
```sql
INSERT INTO weapon (name, damage) VALUES 
('Sword', 25),
('Bow', 15),
('Axe', 30),
('Dagger', 20),
('Staff', 10);
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Start the Server
```bash
npm start
```

## 🎮 Game Features

### 🔫 Weapon Selection
Players choose a weapon at the beginning, each with unique stats.

### ♻️ Continuous Gameplay
- After defeating a monster, a new one appears.
- Players recover a fixed percentage of their HP after each victory.

### 🏆 Leaderboard System
Top 3 players ranked by number of monsters defeated.

## 🖥️ Front-End Interface
- **Player Name Input**: Start the game by entering your name.
- **Combat Area**: Displays player/monster HP and attack logs.
- **Leaderboard**: Shows the top 3 highest scores.

---

Made with ❤️ using Node.js, MySQL, HTML & CSS.
