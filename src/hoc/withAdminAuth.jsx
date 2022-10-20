import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import keycloak from "../app/component/keycloak/keycloak";
import { selectUserAdmin } from "../app/component/redux/slices/UserAdminSlice";

const withAdminAuth = Component => props => {
    const admin = useSelector(selectUserAdmin);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!")
    if(admin === null){
        console.log("WE HAVE NULL")
    }
    console.log(admin)
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!")




    if(admin === null){
        console.log("1")
        return <Navigate to="/"/>
    }
    if(admin[0].role === "Owner" || admin[0].role === "Admin"){
        console.log("2")
        return <Component {...props}/>
    }else{
        console.log("3")
        return <Navigate to="/"/>
    }
}
export default withAdminAuth;