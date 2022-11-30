const alpha = Array.from(Array(26)).map((_, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const capitalize = (str) => {
    if (alphabet.filter(alp => alp === str.charAt(0) || alp.toLowerCase() === str.charAt(0) )) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "no valid characters";
};
module.exports = capitalize;
