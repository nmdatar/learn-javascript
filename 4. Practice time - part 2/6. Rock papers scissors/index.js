let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function randItem() {
    index = Math.floor(Math.random * hands.length)
    return hands[index]
}