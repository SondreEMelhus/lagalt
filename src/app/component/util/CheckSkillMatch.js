export const checkSkillMatch = (user, skill) => {
    if (user.skills !== undefined && skill !== undefined) {
        return user.skills.includes(skill) ? true : false;
    }
    return false;
}