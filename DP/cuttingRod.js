module.exports = {
    //param A : array of integers
    //return an integer
    solve: function (A) {},
};

const findMax = (remainingLength, costOfLength) => {
    if (remainingLength === 0) return 0;

    if (dp.has(remainingLength)) return dp.get(remainingLength);

    let currentMax = 0;

    for (let i = 1; i <= remainingLength; i++) {
        currentMax = Math.max(
            currentMax,
            costOfLength[i - 1] + findMax(remainingLength - i, costOfLength)
        );
    }

    dp.set(remainingLength, currentMax);

    return currentMax;
};
