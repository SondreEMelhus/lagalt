//Libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import ProjectBanner from "../projects/ProjectBanner";
import { selectProjects, updateProjects } from "../redux/slices/ProjectsSlice";
import { selectFilteredProjects, updateFilteredProjects } from "../redux/slices/filters/FilteredProjects";

//Styling
import '../../../css/home.css'

import { selectUser, updateUser, userSlice } from "../redux/slices/UserSlice";
import { getInteractionHistory, getUser, registerUser} from "../../../api/fetchUserAPI";
import keycloak from "../keycloak/keycloak";
import { getProjects } from "../../../api/project";
import { getIndustries, getKeywords, getSkills } from "../../../api/industryAPI";
import { selectIndustries, updateIndustries } from "../redux/slices/filters/lists/IndustriesSlice";
import { skillsSlice } from "../redux/slices/filters/lists/SkillsSlice";
import { updateIndustry } from "../redux/slices/filters/IndustrySlice";
import { updateInitialIndustry } from "../redux/slices/filters/InitialIndustry";
import { scoreProjects } from "../util/SuggestionAlgorithm";
import { selectSkillsAndKeywords } from "../redux/slices/filters/AllSkillsAndKeywords";
import { selectMyProjects } from "../redux/slices/MyProjectsSlice";
import { updateInteractionHistory } from "../redux/slices/InteractionHistorySlice";


export default function HomePage () {

    const filteredProjects = useSelector(selectFilteredProjects);
    const user = useSelector(selectUser);
    const industries = useSelector(selectIndustries);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUser();
        fetchProjects();
        fetchIndustries();
        //genereateSuggestions()
    }, [])

    const fetchUser = async () => {
        if(keycloak.authenticated) { 
            const data = await getUser();
            if (data[0]) {
                alert('Klarte ikke å hente brukerinformasjon. Kontakt en administrator for hjelp')
            } else {
                dispatch( updateUser(data[1]))
            }
        }
    }

    const fetchProjects = async () => {
        const data = await getProjects();
        if (data[0]) {
            alert('Feil: Klarte ikke å hente prosjekter. Kontakt en administrator for hjelp')
        } else {
            dispatch ( updateProjects(data[1]))
            dispatch ( updateFilteredProjects ( data[1] ))
        }
    }


    const fetchIndustries = async () => {
        const data = await getIndustries();
        if (data[0]) {
            alert('Feil: Klarte ikke å hente liste over industrier. Kontakt en administrator for hjelp')
        } else {
            dispatch ( updateIndustries(data[1]));
            populateSkillsAndKeywords(data[1])
        }
    }


    const populateSkillsAndKeywords = (indust) => {
        let keywords = []
        let skills = []

        for (let industry of indust) {
            for (let keyword of industry.keywords) {
                keywords = [...keywords, keyword];
            }
            for (let skill of industry.skills) {
                skills = [...skills, skill]
            }
        }

        const baseIndustry = {
            title: 'Industrier',
            skills: skills,
            keywords: keywords
        }
        dispatch( updateIndustry ( baseIndustry ))
        dispatch( updateInitialIndustry ( baseIndustry));
    }
    

    /*
    const genereateSuggestions = async () => {
        const suggestions = await scoreProjects(user, filteredProjects, industries);
        dispatch ( updateFilteredProjects ( suggestions ))
    }
    */

  
    return (
        <div>
            <div className="home-outer-body">
                <div className="home-body">
                    { filteredProjects.map((project, index) => {
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