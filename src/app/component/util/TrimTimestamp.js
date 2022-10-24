/**
 * Method used to trim a timestamp
 */
export const trimTimestamp = (timestamp) => {

    if (timestamp.length === 23) {
        let hours = timestamp.substring(11,13).includes(':') ? '0' + timestamp.substring(11,12) : timestamp.substring(11,13);
        let minutes = timestamp.substring(14,16).includes(':') ? '0' + timestamp.substring(13, 14) :  timestamp.substring(14,16);

        return hours + ':' + minutes + '  ' + timestamp.substring(8,10) + '/' + timestamp.substring(5,7) + '-' + timestamp.substring(2,4);
    }

    if (timestamp.length === 24) {
        let hours = timestamp.substring(11,13).includes(':') ? '0' + timestamp.substring(11,12) : timestamp.substring(11,13);
        let minutes = timestamp.substring(14,16).includes(':') ? '0' + timestamp.substring(14, 15) :  timestamp.substring(14,16);

        return hours + ':' + minutes + '  ' + timestamp.substring(8,10) + '/' + timestamp.substring(5,7) + '-' + timestamp.substring(2,4);
    }

    if (timestamp.length === 25) {
        let hours = timestamp.substring(11,13);
        let minutes = timestamp.substring(14,16);

        return hours + ':' + minutes + '  ' + timestamp.substring(8,10) + '/' + timestamp.substring(5,7) + '-' + timestamp.substring(2,4);
    }
}