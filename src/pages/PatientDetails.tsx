import MenuPrincipal from "../component/MenuPrincipal.tsx";
import {useParams} from "react-router";
import MenuPatient from "../component/MenuPatient.tsx";
import {useEffect, useState} from "react";
import {Patient} from "../types.tsx";
import {ServiceDirectusAPI} from "../service/serviceDirectusAPI.ts";
import { PatientContext } from "../contexts/PatientContext.ts";
import Background from "../Background.tsx";
import Contexts from "../contexts/Contexts.tsx";

function PatientDetails() {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<Patient | null>(null)
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const service = new ServiceDirectusAPI();
        const fetchPatient = async () => {
            try {
                if(id){
                    const result = await service.get_patient_by_id(id);
                    setPatient(result);
                }else{
                    setError(Error('No ID found'));
                }

            } catch (e) {
                if (e instanceof Error) {
                    setError(e);
                } else {
                    setError(Error("An unknown error occurred."));
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchPatient();
    }, [id]);

    console.log(patient);

    if (isLoading) {
        return (
            <>
                <div className="loader-container">
                    <div className="loader">Loading...</div>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                {error.message}
            </>
        );
    }

    return (
        <>
            <Contexts>
                <MenuPrincipal/>
            </Contexts>
            <div className="App">

                <div className="patient-details">
                    <PatientContext.Provider value={patient}>
                        <div className="patient-name">
                            <h2>{patient?.firstname} {patient?.lastname}</h2>
                        </div>
                        <MenuPatient id={id}/>
                    </PatientContext.Provider>
                </div>
            </div>
            <Background/>
        </>

    )
}

export default PatientDetails;

//TODO : global presentation (picture + name)

//TODO : menu for accessing basic infos, psychological, physical, physiological datas

//TODO : graphs for physio, psycho, physical datas

//TODO : chatbot at the end of the page, for special training according to patients data

//TODO: This page should not be accessed if not connected to pro account