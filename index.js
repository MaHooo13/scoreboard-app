let homeScoreEl = document.getElementById("home-score")
let homeScore = parseInt(homeScoreEl.textContent)

let awayScoreEl = document.getElementById("guest-score")
let awayScore = parseInt(awayScoreEl.textContent)


function addHome(points){
    homeScore+=points
    homeScoreEl.textContent = homeScore
}

function addGuest(points){
    awayScore+=points
    awayScoreEl.textContent = awayScore
}