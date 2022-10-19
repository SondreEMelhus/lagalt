export const applyFilters = (listOfProjects, filterIndustry, filterKeyword, filterSkill) => {

    /*
    Switch cases:

    1. Industry = 1
    2. Keyword = 2
    3. Skill = 4
    4. Industry, Keyword = 3
    5. Industry, Skill = 5
    6. Keyword, skill = 6 
    7. Industry, Keyword, Skill = 7

    TODO: Legg til case dersom 'Alle industrier er valgt

    Industry = 1;
    Keyword = 2;
    Skill = 4;
    */

    let filterSelection = 0;
    let filteredProjects = [];

    console.log(filterSelection);
    console.log('Industry: ' + filterIndustry);
    console.log('Nøkkelord: ' + filterKeyword);
    console.log('Ferdighet: ' + filterSkill);

    //Decide filter combination
    filterIndustry.title !== 'Industrier' ? filterSelection += 1 : filterSelection += 0;
    filterKeyword !== 'Nøkkelord' ? filterSelection += 2 : filterSelection += 0;
    filterSkill !== 'Ferdighet' ? filterSelection += 4 : filterSelection += 0;

    for (let project of listOfProjects) {
        switch(filterSelection) {
            case 1:
                if (project.industry === filterIndustry.title) {
                    filteredProjects.push(project);
                }
                break;
            case 2:
                if (project.keywords.includes(filterKeyword)) {
                    filteredProjects.push(project);
                }
                break;
            case 3:
                if (project.keywords.includes(filterKeyword) && project.industry === filterIndustry.title) {
                        filteredProjects.push(project);
                }
                break;
            case 4:
                if (project.skills.includes(filterSkill)) {
                    filteredProjects.push(project);
                }
                break;
            case 5:
                if (project.skills.includes(filterSkill) && project.industry === filterIndustry.title) {
                    filteredProjects.push(project);
                }
                break;
            case 6:
                if (project.keywords.includes(filterKeyword) && project.skills.includes(filterSkill)) {
                    filteredProjects.push(project);
                }
                break;
            case 7:
                if (project.keywords.includes(filterKeyword) && project.skills.includes(filterSkill) && project.industry === filterIndustry.title) {
                    filteredProjects.push(project);
                }
                break;
            //Default case for ingen filter
            default:
                return listOfProjects;
        }
    }
    return filteredProjects;
}