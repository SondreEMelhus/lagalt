export const generateTimestamp = () => {
    let date = new Date();
    return date.getHours().toString().length < 2 ? '0' + date.getHours() + ":" + date.getMinutes() : date.getHours()  + ":" + date.getMinutes();
}