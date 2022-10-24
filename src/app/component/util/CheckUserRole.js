/**
 * Method used to check a users role in a project
 */
export const checkUserRole = (user, projectContributers) => {
    for (let contributer of projectContributers) {
        if ( contributer.username === user.username ) {
            return contributer.role;
        }
        return '';
    }
}