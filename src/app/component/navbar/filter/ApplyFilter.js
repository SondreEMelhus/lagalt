/**
 * Method responsible for determining what filter options have been chosen, and populating the filteredProjects 
 * state with the propper projects related to the filter
 * @param {Array [Project]} listOfProjects : A list of all projects
 * @param {Industry} filterIndustry : The chosen industry
 * @param {Keyword} filterKeyword : The chosen keyword
 * @param {Skill} filterSkill : The chosen skill
 * @returns A list of all the filtered projects
 */
export const applyFilters = (listOfProjects, filterIndustry, filterKeyword, filterSkill) => {

    /*
    Explenation of filter logic

    Each filter option value:
        Industry = 1;
        Keyword = 2;
        Skill = 4;

    Switch cases:
        0/Default: No chosen industry, keyword and skill

        1. Industry = 1
        2. Keyword = 2
        3. Skill = 4

        4. Industry, Keyword = 3
        5. Industry, Skill = 5
        6. Keyword, skill = 6 

        7. Industry, Keyword, Skill = 7

    */

    //Filter score based on the valuex above
    let filterSelection = 0;

    //Array to contain all projects matching the filter options
    let filteredProjects = [];

    //Decide filter combination
    filterIndustry.title !== 'Industrier' ? filterSelection += 1 : filterSelection += 0;
    filterKeyword !== 'Nøkkelord' ? filterSelection += 2 : filterSelection += 0;
    filterSkill !== 'Ferdighet' ? filterSelection += 4 : filterSelection += 0;

    //Loop through all projects and add projects matching the filter values
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
            default:
                return listOfProjects;
        }
    }
    return filteredProjects;
}