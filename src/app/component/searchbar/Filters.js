/**
 * Function used to search through a list and filter it based upon a given sub-string
 * @param {String} text A text used to search through the list
 * @param {*} filterList A list of strings
 * @returns A complete list of all strings in the filterList that contains a sub-string matching the text
 */
 export const filter = (text, list) => {
     if (text == '') return [];
    let filteredList = [];
    list.forEach(listText => listText.match(text) ? filteredList.push(listText) : null);
    return filteredList;
}