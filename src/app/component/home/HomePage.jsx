//Libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import keycloak from "../keycloak/keycloak";
import ProjectBanner from "../projects/ProjectBanner";

//Redux slices
import { updateUser } from "../redux/slices/UserSlice";
import { updateProjects } from "../redux/slices/ProjectsSlice";
import { updateIndustry } from "../redux/slices/filters/IndustrySlice";
import { updateInitialIndustry } from "../redux/slices/filters/InitialIndustry";
import { updateIndustries } from "../redux/slices/filters/lists/IndustriesSlice";
import { updateCreateIndustry } from "../redux/slices/filters/lists/CreateIndustrySlice";
import { selectFilteredProjects, updateFilteredProjects } from "../redux/slices/filters/FilteredProjects";

//API
import { getProjects } from "../../../api/project";
import { getIndustries } from "../../../api/industryAPI";
import { getUser, registerUser } from "../../../api/fetchUserAPI";

//Styling
import '../../../css/home.css'


export default function HomePage () {

    //Hooks
    const filteredProjects = useSelector(selectFilteredProjects);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUser();
        fetchProjects();
        fetchIndustries();
    }, [])


    //API fetch methods

    /**
     * Method used to fetch a user from the back-end with a username mathcing the keycloak username
     */
    const fetchUser = async () => {
        if(keycloak.authenticated) { 
            const userResponse = await getUser();
            userResponse ? dispatch( updateUser(userResponse)): await registerUser();
        }
    }

    /**
     * Method used to fetch projects from the back-end
     */
    const fetchProjects = async () => {
        const data = await getProjects();
        if (data[0]) {
            alert('Feil: Klarte ikke å hente prosjekter. Kontakt en administrator for hjelp')
        } else {
            dispatch ( updateProjects(data[1]))
            dispatch ( updateCreateIndustry(data[1]))
            dispatch ( updateFilteredProjects ( data[1] ))
        }
    }

    /**
     * Method used to fetch all the industries
     */
    const fetchIndustries = async () => {
        const data = await getIndustries();
        if (data[0]) {
            alert('Feil: Klarte ikke å hente liste over industrier. Kontakt en administrator for hjelp')
        } else {
            dispatch ( updateIndustries(data[1]));
            populateSkillsAndKeywords(data[1])
        }
    }


    /**
    * Method used to fetch all skills and keywords and instanciate a base industry object
    */
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

    //Render function
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