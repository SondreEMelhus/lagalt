export const generateTimestamp = () => {
    //2022-10-14T10:10:10+00:00
    let date = new Date();
    let month = date.getMonth() > 9 ? date.getMonth().toString() : '0' + date.getMonth().toString();
    let day = date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate().toString();
    let hours = date.getHours().toString() < 2 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes().toString < 2 ? '0' + date.getMinutes() : date.getMinutes();
    
    let newDate = date.getFullYear() + '-' + month + '-' + day + 'T' + hours + ':' + minutes + '+00:00';
    return newDate;
}