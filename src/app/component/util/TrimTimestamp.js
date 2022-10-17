export const trimTimestamp = (timestamp) => {
    let formatedTimestamp = timestamp.substring(11,16) + '  ' + timestamp.substring(8,10) + '/' + timestamp.substring(5,7) + '-' + timestamp.substring(2,4);
    return formatedTimestamp;
}