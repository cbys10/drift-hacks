const storedData=JSON.parse(localStorage.getItem("mjs-drift-boss-game-v1.0.1-dailyreward"))||{};console.log(storedData);const coins=prompt("How many coins do you want?"),coinsInt=parseInt(coins,10);isNaN(coinsInt)?alert("Please enter a valid number for coins."):(storedData.score=coinsInt,localStorage.setItem("mjs-drift-boss-game-v1.0.1-dailyreward",JSON.stringify(storedData)),console.log(storedData)),window.location.reload();
