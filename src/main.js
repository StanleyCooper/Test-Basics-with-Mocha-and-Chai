function averageScore(students) {
    if (!students) return null;

    let totalScore = 0;
    for (let i = 0; i < students.length; i++) {
        totalScore += students[i].score;
    }
    return Number((totalScore / students.length).toFixed(1));
}

function testingThrowing(password) {
    const errors = [];
    if (password.length > 7) errors.push("length is too long");
    if (password.length < 7) errors.push("length is too short");
    if (password !== "abcdefg") errors.push("password is incorrect");

    // Throw if there are any errors
    if (errors.length) throw(errors);
    return true;
}

testingThrowing("abcdef");

module.exports = averageScore;