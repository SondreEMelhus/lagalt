//Libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Navbar from "../navbar/Navbar";
import ProjectBanner from "../projects/ProjectBanner";
import { selectProjects, updateProjects } from "../redux/slices/ProjectsSlice";
import { updateSkills } from "../redux/slices/filters/lists/SkillsSlice";
import { updateKeywords } from "../redux/slices/filters/lists/KeywordsSlice";
import { generateKeywordState, generateSkillsState } from "../util/StatePopulator";
import { updateProjectNames } from "../redux/slices/filters/lists/ProjectNamesSlice";
import { generateProjectNameState } from "../util/StatePopulator";
import { selectFilteredProjects, updateFilteredProjects } from "../redux/slices/filters/FilteredProjects";
import { scoreProjects } from "../util/SuggestionAlgorithm";

//Styling
import '../../../css/home.css'
import { selectUser } from "../redux/slices/UserSlice";

export default function HomePage () {

    const user = useSelector(selectUser);
    const projects = useSelector(selectProjects);
    const filteredProjects = useSelector(selectFilteredProjects);
    const dispatch = useDispatch();

    //Populate skills and keywords in filter

    useEffect(() => {
        dispatch( updateProjects (generateProjectSuggestions()));
    }, [])

    useEffect(() => {
        dispatch( updateSkills( generateSkillsState(projects) ));
        dispatch( updateKeywords( generateKeywordState(projects) ));
        dispatch( updateProjectNames ( generateProjectNameState( projects )));
        dispatch( updateFilteredProjects ( projects ));
    }, [projects])

    const generateProjectSuggestions = () => {
        const industries = ['Musikk', 'Film', 'Spillutvikling', 'Webutvikling'];
        const skills = ['C++','React','Bootstrap','Kamera','Klipping','Skuespiller','Unity','Unreal','Soundtrap','Mixer',
        'Beat maker','Java','Heroku','Spring boot','Hibernate','Redux','Shader programmering'];
        const keywords = ['Lidenskapelig','Erfaren', 'Nybegynner','Full-stack','Front-end','Back-end','Musikalsk',
        'Drop-the-beat'];
        return scoreProjects(user, projects, industries, keywords, skills);
    }

    return (
        <div>
            <Navbar />
            <div className="home-outer-body">
                <div className="home-body">
                    {filteredProjects.map((project, index) => {
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