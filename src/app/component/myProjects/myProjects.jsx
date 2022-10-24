//Libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import withAuth from "../../../hoc/withAuth";
import ProjectBanner from "../projects/ProjectBanner";

//Redux slices
import { selectUser } from '../redux/slices/UserSlice'

//API
import { selectUserProjects } from '../redux/slices/UserProjects'
import { getUserProjects } from "../../../api/fetchUserAPI";
import { updateUserProjects } from "../redux/slices/UserProjects";

//Styling
import '../../../css/profile.css'

/**
 * Component responsible for retriving and rendering all projects related to a logged in user
 */
function MyProjects () {

    //Hooks
    const user = useSelector(selectUser);
    const userProjects = useSelector(selectUserProjects);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProjects();
    }, [])

    //API fetch methods
    
    /**
     * Method used to fetch all projects containing the users id as a contributer
     */
    const fetchProjects = async () => {
        const result = await getUserProjects(user.id);

        if (result[0] !== null) {
            alert('Feil: Kunne ikke hente dine prosjekter. Kontakt en administrator.')
        } else {
            dispatch( updateUserProjects (result[1]));
        }
    }

    //Render function
    return (
        <>
            <p>Mine prosjekter</p>
            <div className="home-body">
                    {userProjects.length === 0 && <h3 className="no-message">Du har ingen prosjekter</h3>}
                    {userProjects !== undefined && userProjects.map((project, index) => {
                        return (
                            <ProjectBanner key={index + '-' + project.id} project={project}/>
                        )
                    })

                    }
                </div>

        </>
    )
}

export default withAuth(MyProjects);