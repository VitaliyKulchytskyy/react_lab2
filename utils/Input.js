export function isNumericKey(event, isCommaSeparator=false) {
    var code = (event.which) ? event.which : event.keyCode;
    return (isCommaSeparator && event.key == '.') || !((code < 48 || code > 57) && (code > 31));
}