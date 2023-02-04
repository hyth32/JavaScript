function getRandomBetween(min, max) {
    return Math.floor(random()) * (max - min + 1) + min
}

console.log(getRandomBetween(10, 42));

