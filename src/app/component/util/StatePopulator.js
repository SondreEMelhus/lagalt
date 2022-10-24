/**
 * Method used to populate a list of keywords related to a project
 */
export const generateKeywordState = (listOfProjects) => {

    let keywords = new Set();
    keywords.add('Nøkkelord');

    for (let project of listOfProjects) {
        for (let keyword of project.keywords) {
            keywords.add(keyword);
        }
    }

    const array = [...keywords];

    return array;
}

/**
 * Method used to populate a list of skills related to a project
 */
export const generateSkillsState = (listOfProjects) => {

    let skills = new Set();
    skills.add('Ferdighet');

    for (let project of listOfProjects) {
        for (let skill of project.skills) {
            skills.add(skill);
        }
    }

    const array = [...skills];

    return array;
}

/**
 * Method used to populate a list of project names related to a project
 */
export const generateProjectNameState = (listOfProjects) => {

    let names = new Set();

    for (let project of listOfProjects) {
        names.add(project.name);
    }

    const array = [...names];

    return array;
}