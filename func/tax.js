// Tax -> 0-5000 5%, 5001-15000 10%, >15000 30%

const calculateTax = (income) => {
    if (0 < income <= 5000) {
        return income * 0.05
    } else if (5001 < income <= 15000) {
        return income * 0.15
    } else if (15000<income) {
        return income*0.3
    }
}

module.exports = {
    calculateTax
}