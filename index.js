function getMeNextFirst(str) {
    str = str.trim();
    str = str.replace(/ (.)/g, "$1 ");
    return str;
}