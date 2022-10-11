export const generateKeywordState = (listOfProjects) => {

    let keywords = [];

    for (let project of listOfProjects) {
        for (let keyword of project.keywords) {
            keywords.push(keyword.keyword);
        }
    }

    return keywords;
}

export const generateSkillsState = (listOfProjects) => {

    let skills = [];

    for (let project of listOfProjects) {
        for (let skill of project.skills) {
            skills.push(skill.skill);
        }
    }

    return skills;
}