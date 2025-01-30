const express = require("express")
const pool = require("./db")

const app = express()
app.use(express.json())

//CREATE
app.post("/players", async (req, res) => {
  try {
    const { name, hp, weapon_id } = req.body
    // Insertion dans la base de données
    const [result] = await pool.query(
      "INSERT INTO player (name, hp, weapon_id) VALUES (?, ?, ?)",
      [name, hp, weapon_id]
    )

    // Réponse avec l'animal créé
    res.status(201).json(result)
  } catch (err) {
    console.error(err)
    res.status(500).send("Erreur serveur")
  }
})

// //READ
app.get("/players", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM player")
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).send("Erreur serveur")
  }
})

//LEADERBOARD
app.get("/leaderboard", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM player ORDER BY victory_number DESC LIMIT 3"
    )
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).send("Erreur serveur")
  }
})

//PATCH
app.patch("/players/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { field, value } = req.body

    const [result] = await pool.query(
      `UPDATE player SET ${field} = ? WHERE id = ?`,
      [value, id]
    )

    if (result.affectedRows === 0) {
      return res.status(404).send("Joueur introuvable")
    }

    res.send(`${field} mis à jour`)
  } catch (err) {
    console.error(err)
    res.status(500).send("Erreur serveur")
  }
})

// READ (one)
app.get("/players/:id", async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query("SELECT * FROM player WHERE id = ?", [id])
    if (rows.length === 0) return res.status(404).send("Joueur introuvable")
    res.json(rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).send("Erreur serveur")
  }
})

// // DELETE
app.delete("/players/:id", async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await pool.query("DELETE FROM player WHERE id = ?", [id])
    if (result.affectedRows === 0)
      return res.status(404).send("Joueur introuvable")
    res.send("Joueur supprimé")
  } catch (err) {
    console.error(err)
    res.status(500).send("Erreur serveur")
  }
})

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000")
})
