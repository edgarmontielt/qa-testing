// Tax -> 0-5000 5%, 5001-15000 10%, >15000 30%

const calculateTax = (income) => {

    if (income < 0) return 'No negative numbers'

    if (income > 0 && income <= 5000) {
        return income * 0.05
    } else if (income > 5000 && income <= 15000) {
        return income * 0.15
    } else if (15000 < income) {
        return income * 0.3
    } else {
        return new Error('Error')
    }
}

module.exports = {
    calculateTax
}