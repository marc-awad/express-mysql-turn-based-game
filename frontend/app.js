const API_URL = "http://localhost:3000/"
const PLAYER_URL = `${API_URL}players`
const WEAPON_URL = `${API_URL}weapons`
const LEADERBOARD_URL = `${API_URL}leaderboard`
const leaderboardDiv = document.getElementById("leaderboard")

async function fetchData(URL) {
  try {
    const response = await fetch(URL)
    const data = await response.json()
    // console.log(data)
    return data
  } catch (error) {
    console.error("Error:", error)
  }
}

async function addingDataToLeaderBoard() {
    const leaderboardData = await fetchData(LEADERBOARD_URL)
    console.log(leaderboardData)
    let place = 1
    leaderboardData.forEach(player => {
        leaderboardDiv.innerHTML += `<p>${place}.${player.name} - ${player.victory_number}</p>`
    });
}

addingDataToLeaderBoard()
