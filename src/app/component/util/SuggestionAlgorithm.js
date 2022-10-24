/*
Rangeringssystem:

Algoritmen skal sortere arrayen av prosjekter ut i fra hva som best matcher en brukers interesser.
Best match fremst i arrayen, og dårligere match lenger bak.

Prio:
- Industri som matcher best mot brukers interesse -> 5 poeng
- Key:
  - Dersom bruker har contributet til et prosjekt med gitt keyword --> 3 poeng per keyword
  - Dersom bruker har trykket seg inn på et prosjekt med gitt keyword --> 2 poeng per keyword
  - Dersom bruker har sett (main page) er prosjekt med gitt keyword --> 1 poeng per keyword
- Skill:
  - Dersom bruker har til samme skill som et prosjekt --> 4 poeng per matchende skill
*/

/**
 * Method used to score each project based on a users skills, interaction historu and contribution history
 */
const generateScores = (user, viewHistory, contributions, listOfIndustries) => {

    let industriesMap = new Map();

    let keywordMap = new Map();

    let skillMap = new Map();


    //Generer maps for industry, keywords og skills (Kan kanskje passes inn via parameter)
    for (let industry of listOfIndustries) {
        industriesMap.set(industry, 0);
        for (let keyword of industry.keywords) {
            if (!keywordMap.has(keyword)) {
                keywordMap.set(keyword, 0);
            }
        }
        for (let skill of industry.skills) {
            if (!skillMap.has(skill)) {
                skillMap.set(skill, 0);
            }
        }
    }



    //Iterer gjennom viewHistory og contribution history
    
    //TODO: Endre så denne matcher viewHistory attribut
    viewHistory.forEach(project => {
        //Industry
        let industryScore = industriesMap.get(project.industry)
        industryScore += 3;
        industriesMap.set(project.industry, industryScore);

        //Keyword viewhistory score
        for (let keyword of project.keywords) {
            let keywordScore = keywordMap.get(keyword);
            keywordScore += 1;
            keywordMap.set(keyword, keywordScore);
        }

        //Skill viewhistory score
        for (let skill of project.skills) {
            if (user.skills.includes(skill)) {
                let skillScore = skillMap.get(skill);
                skillScore += 2;
                skillMap.set(skill, skillScore);
            }
        }

    })

    //TODO: Endre så denne matcher contributed attribut
    user.contributionHistory.forEach(project => {

        //Industry
        let industryScore = industriesMap.get(project.industry)
        industryScore += 5;
        industriesMap.set(project.industry, industryScore);

        //Keyword
        for (let keyword of project.keywords) {
            let keywordScore = keywordMap.get(keyword);
            keywordScore += 2;
            keywordMap.set(keyword, keywordScore);
        }

        //Skill
        for (let skill of project.skills) {
            if (user.skills.includes(skill)) {
                let skillScore = skillMap.get(skill);
                skillScore += 4;
                skillMap.set(skill, skillScore);
            }
        }
    })

    return [industriesMap, keywordMap, skillMap];
}

/**
 * Method used to accumulate each projects score based in skills matching users skills, interaction history and
 * contribution history
 */
export const scoreProjects = (user, listOfProjects, listOfIndustries) => {

    if (user === undefined) {
        return listOfProjects;
    } else {
        
        const scoreMaps = generateScores(user, listOfIndustries);

        const industryScores = scoreMaps[0];
        const keywordScores = scoreMaps[1];
        const skillScores = scoreMaps[2];

        const projectScoreMap = new Map();

        for (let project of listOfProjects) {


            let score = 0;

            score += industryScores.get(project.industry);

            project.keywords.forEach(keyword => score += keywordScores.get(keyword));
            
            project.skills.forEach(skill => score += skillScores.get(skill));

            //console.log('Prosjekt ' + project.title + ' got a score of ' + score);
            projectScoreMap.set(project, score);
        }

        let orderedProjects = new Map([...projectScoreMap].sort((a, b) => b[1] - a[1]));
        return Array.from(orderedProjects.keys());
    }
}
