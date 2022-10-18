export const checkUserRole = (user, projectContributers) => {
    for (let contributer of projectContributers) {
        if ( contributer.username === user.username ) {
            console.log(contributer.role);
            return contributer.role;
        }
    }
}