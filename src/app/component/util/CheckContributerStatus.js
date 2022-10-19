export const checkUserStatus = (project, user) => {
    if (project.contributors!== undefined && user.username !== undefined) {
        if (project.contributors.includes(user.username)) {
            return true;
        }
    }
    return false;
}