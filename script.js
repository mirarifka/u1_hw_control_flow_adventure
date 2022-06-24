function playGame() {
  const enterArrakis = confirm('Would you like to go to Arrakis?')

  if (enterArrakis === true) {
    let enterArrakisChoice = prompt(
      'You land on Arrakis. Would you like to (A) Meet the Fremen (B) Go to harvest spice (C) Practice your Bene Gesserit powers?'
    )
    if (enterArrakisChoice == 'A') {
      alert("Okay, let's go meet the Fremen!")
    }
    if (fremenChoice === true) {
      let fremenFightChoice = prompt(
        'Begin to fight! Which weapon will you choose? (A) shard-dagger or (B) spear?'
      )
    }
    if (fremenFightChoice == 'A') {
      alert(
        "You survived! You are the Muad'Dib, you will win the war and become emperor!"
      )
    } else if (fremenFightChoice == 'B') {
      alert("Uh oh, you died because your skills aren't good enough. The end.")
    } else if (enterArrakisChoice === 'B') {
      alert("Okay, let's harvest some spice, baby!")
      let spiceChoice = confirm(
        "Okay, we are in the spice harvester, but there's a lot of worm activity. Do you still want to continue?"
      )
    }
    if (spiceChoice === true) {
      let spiceWormChoice = prompt(
        'A worm is coming right for you! Should we abandon the harvester or keep going? (A) Abandon or (B) Keep Going?'
      )
    }
    if (spiceWormChoice == 'A') {
      alert('Phew, that was close! Maybe we can come back another day.')
    } else if (spiceWormChoice == 'B') {
      alert(
        'The worm begins to devour the harvester, you are now in the belly of a worm. Goodbye.'
      )
    } else if (enterArrakisChoice == 'C') {
      alert('Okay, we will practice your mind skills.')
      let benegesseritChoice = confirm(
        'Would you like to know what your dreams mean?'
      )
    }
    if (benegesseritChoice === true) {
      const dreamNumber = '7'
      let dreamChoice = prompt(
        'Hello sister, welcome to the Bene Gesserit sisterhood. Can you think of a number between 1 and 10?'
      )
    }
    if ((dreamChoice = 7)) {
      let correctDream = alert('Ah! Your powers are strong!')
      let newDream = prompt('Now tell me a bit more about your dream.')
    } else if (dreamChoice > 7) {
      let incorrectDream = alert(
        'You are not supposed to be here! You do not know the ways! Goodbye.'
      )
    } else {
      alert('Okay, stay in Caladan, that is fine.')
    }
  }
}

const playAgain = confirm('Do you want to play again?')
if (playAgain == true) {
  playGame()
}
playGame()
