export const generateTimestamp = () => {
    //2022-10-14T10:10:10+00:00
    let date = new Date();
    let month = date.getMonth() > 9 ? date.getMonth().toString() : '0' + date.getMonth().toString();
    let day = date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate().toString();
    
    let newDate = date.getFullYear().toString() + '-' + month + '-' + day + 'T' + date.getHours().toString() + ':' + date.getMinutes().toString() +
    date.getSeconds().toString() + '+00:00';
    return newDate;
}