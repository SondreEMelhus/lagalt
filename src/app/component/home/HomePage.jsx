//Libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import ProjectBanner from "../projects/ProjectBanner";
import { selectProjects, updateProjects } from "../redux/slices/ProjectsSlice";
import { selectFilteredProjects, updateFilteredProjects } from "../redux/slices/filters/FilteredProjects";

//Styling
import '../../../css/home.css'

import { selectUser, updateUser } from "../redux/slices/UserSlice";
import { getUser} from "../../../api/fetchUserAPI";
import keycloak from "../keycloak/keycloak";
import { getProjects } from "../../../api/project";
import { getIndustries } from "../../../api/industryAPI";
import { selectIndustries, updateIndustries } from "../redux/slices/filters/lists/IndustriesSlice";


export default function HomePage () {

    const user = useSelector(selectUser);
    const projects = useSelector(selectProjects);
    const filteredProjects = useSelector(selectFilteredProjects);
    const dispatch = useDispatch();

    const industries = useSelector(selectIndustries);

    //Populate skills and keywords in filter

    useEffect(() => {
        fetchUser();
        fetchProjects();
        fetchIndustries();
    }, [])

    /*
    useEffect(() => {
        dispatch( updateSkills( generateSkillsState(projects) ));
        dispatch( updateKeywords( generateKeywordState(projects) ));
        dispatch( updateProjectNames ( generateProjectNameState( projects )));
        dispatch( updateFilteredProjects ( projects ));
    }, [projects])
    */

    //TODO: Fjern log, heller setError
    const fetchUser = async () => {
        if(keycloak.authenticated) { 
            const userResponse = await getUser();
            userResponse ? dispatch( updateUser(userResponse)): console.log('Could not fetch user');
        }
    }

    //TODO: Fjern log, heller setError
    const fetchProjects = async () => {
        const data = await getProjects();
        data ? dispatch ( updateProjects(data[1])) : console.log('Could not fetch projects');
    }

    //TODO: Fjern log, heller setError
    const fetchIndustries = async () => {
        const data = await getIndustries();
        data ? dispatch ( updateIndustries(data)) : console.log('Could not fetch industries');
    }

  
    return (
        <div>
            <div className="home-outer-body">
                <div className="home-body">
                    { projects.map((project, index) => {
                        return (
                            <ProjectBanner key={index + '-' + project.id} project={project} />
                        )
                    })

                }
                </div>
            </div>
        </div>
    )
}