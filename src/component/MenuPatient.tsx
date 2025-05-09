import {NavLink, Outlet} from "react-router";
import {MenuPatientProps} from "../types.tsx";

function MenuPatient({ id }: MenuPatientProps){

    return(
        <>
            <div className="menuPatient">
                <NavLink to={`/patients/${id}/patientInfos`}>Informations</NavLink>
                <NavLink to={`/patients/${id}/patientPhysio`}>Données physiologiques</NavLink>
                <NavLink to={`/patients/${id}/patientPhysic`}>Données d'activités physiques</NavLink>
                <NavLink to={`/patients/${id}/patientPsychic`}>Données psychologiques</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default MenuPatient;