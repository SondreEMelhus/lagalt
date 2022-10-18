export const checkUserRole = (user, projectContributers) => {
    for (let contributer of projectContributers) {
        if ( contributer.username === user.usernamer ) {
            return contributer.role;
        }
    }
}