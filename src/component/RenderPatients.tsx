import {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ServiceDirectusAPI} from "../service/serviceDirectusAPI.ts";
import {Patient, RenderPropsKeywords} from "../types.tsx";
import Carrousel from "./Carrousel.tsx";
import { PatientsContext } from "../contexts/PatientsContext.ts";


function RenderPatients(){

    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSearched, setIsSearched] = useState(false);
    const [patients, setPatients] = useState<Patient[]|null>(null);

    const {register,
        handleSubmit,
        reset,
        formState: { errors },} = useForm<RenderPropsKeywords>()

    const OnSubmit: SubmitHandler<RenderPropsKeywords> = async (data) => {
        setIsSearched(true);
        setIsLoading(true);
        const service = new ServiceDirectusAPI();
        try {
            const result = await service.get_patients_by_keyword(data.keyword);
            setPatients(result);
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

    const handleReset = async () => {
        setIsSearched(false);
        setIsLoading(true)
        const service = new ServiceDirectusAPI();
        try {
            const patients = await service.get_items_people();
            setPatients(patients);
        }catch (e) {
            if (e instanceof Error) {
                setError(e);
            } else {
                setError(Error("An unknown error occurred."));
            }
        } finally {
            setIsLoading(false);
        }
        reset();
    };

    useEffect(() => {
        const service = new ServiceDirectusAPI();
        const fetchPatient = async () => {
            try {
                const result = await service.get_items_people();
                setPatients(result);
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
    }, []);

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

    return(
        <PatientsContext.Provider value={patients}>
            <h1 className="Liste des patients">Patients</h1>
            <div>
                <p className="nombre-patients">{patients?.length} Patients trouvés</p>
                <div className="patient-search">
                    <form onSubmit={handleSubmit(OnSubmit)}>
                        <label>Rechercher un patient par nom de famille</label>
                        <input {...register("keyword", {required: true})} />
                        {errors.keyword && (<div><span className="error-msg">Veuillez entrer une valeur</span></div>)}
                        <input type="submit" />
                        {isSearched && (<button onClick={handleReset}>Reset</button>)}
                    </form>
                </div>
                <Carrousel/>
            </div>
        </PatientsContext.Provider>
    )
}

export default RenderPatients;

