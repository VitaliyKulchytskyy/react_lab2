export function validateForm(obj) {
    if (obj["card"].length != 19)
        return true;
    if (obj["cvc2"].length != 3)
        return true;
    for (const value of Object.values(obj)) {
        if (value == null || value === '' || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && Object.keys(value).length === 0) || value == 0) {
            return true; 
        }
    }
    return false; 
}