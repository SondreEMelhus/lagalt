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

export const generateProjectNameState = (listOfProjects) => {

    let names = new Set();

    for (let project of listOfProjects) {
        names.add(project.name);
    }

    const array = [...names];

    return array;
}