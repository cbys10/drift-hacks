const storedData = JSON.parse(localStorage.getItem('mjs-drift-boss-game-v1.0.1-dailyreward')) || {};
console.log(storedData);
storedData.cars = [0,1,2,3,4,5,6,7];
localStorage.setItem('mjs-drift-boss-game-v1.0.1-dailyreward', JSON.stringify(storedData));
console.log(storedData);
