export function parseDefault(text) {
    return text;
}

export function parseFloatNumber(text) {
    return text.replace(/[^\d.]/g, "");
}

export function parseNumber(text) {
    return text.replace(/[^\d]/g, "");
}

export function parseCardNumber(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || '';
    var parts = [];

    for (var i = 0, len = match.length; i < len; i += 4)
        parts.push(match.substring(i, i + 4));

    return parts.length ? parts.join(' ') : value;
}

export function parseMonth(text) {
    let parsed = parseNumber(text);
    return (1 <= parsed && parsed <= 12) ? parsed : "";
}