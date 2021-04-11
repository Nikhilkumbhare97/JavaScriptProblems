let numbers = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 0];
console.log("Triplets with sum ZERO :")
for (i = 0; i < numbers.length - 2; i++) {
    for (j = i + 1; j < numbers.length - 1; j++) {
        for (k = j + 1; k < numbers.length; k++) {
            if (numbers[i] + numbers[j] + numbers[k] == 0) {
                console.log(numbers[i], numbers[j], numbers[k]);
            }
        }
    }
}