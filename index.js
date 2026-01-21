let countElHome = document.getElementById("count-el-home")
let countElGuest = document.getElementById("count-el-guest")

let countHome = 0
let countGuest = 0
function homeIncrement1() {
    countHome += 1
    countElHome.textContent = countHome
}
function homeIncrement2() {
    countHome += 2
    countElHome.textContent = countHome
}
function homeIncrement3() {
    countHome += 3
    countElHome.textContent = countHome
}
function guestIncrement1() {
    countGuest += 1
    countElGuest.textContent = countGuest
}
function guestIncrement2() {
    countGuest += 2
    countElGuest.textContent = countGuest
}
function guestIncrement3() {
    countGuest += 3
    countElGuest.textContent = countGuest
}

function resetScore() {
    countHome = 0
    countGuest = 0
    countElHome.textContent = countHome
    countElGuest.textContent = countGuest
}