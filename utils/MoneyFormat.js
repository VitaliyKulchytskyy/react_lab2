export function formatMoneyToFloat(amount, thousands=' ') {
    return parseFloat(amount.toString().replace(thousands, ''));
}

export function formatMoney(amount, decimalCount=2, decimal='.', thousands=' ') {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    var i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    var j = (i.length > 3) ? i.length % 3 : 0;
    var fraction = (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands);
    if (amount - i <= 0.01)
        return negativeSign + fraction;

    return negativeSign +
        fraction +
        (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '');
};

export function listToMoney(values, decimalCount=2) {
    values.forEach(function(part, index) {
        this[index] = formatMoney(this[index], decimalCount=decimalCount);
    }, values);
    return values;
}
