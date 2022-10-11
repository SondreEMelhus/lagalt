//Libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Navbar from "../navbar/Navbar";
import ProjectBanner from "../projects/ProjectBanner";
import { selectProjects } from "../redux/slices/ProjectsSlice";
import { updateSkills } from "../redux/slices/filters/lists/SkillsSlice";
import { updateKeywords } from "../redux/slices/filters/lists/KeywordsSlice";
import { generateKeywordState, generateSkillsState } from "../util/StatePopulator";
import { updateProjectNames } from "../redux/slices/filters/lists/ProjectNamesSlice";
import { generateProjectNameState } from "../util/StatePopulator";
import { selectFilteredProjects, updateFilteredProjects } from "../redux/slices/filters/FilteredProjects";

//Styling
import '../../../css/home.css'

export default function HomePage () {

    const projects = useSelector(selectProjects);
    const filteredProjects = useSelector(selectFilteredProjects);
    const dispatch = useDispatch();

    //Populate skills and keywords in filter
    useEffect(() => {
        dispatch( updateSkills( generateSkillsState(projects) ));
        dispatch( updateKeywords( generateKeywordState(projects) ));
        dispatch( updateProjectNames ( generateProjectNameState( projects )));
        dispatch( updateFilteredProjects ( projects ));
    }, [])

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