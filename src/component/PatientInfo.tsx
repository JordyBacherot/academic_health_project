import {Patient} from "../types.tsx";
import { usePatient } from "../contexts/PatientContext";

function PatientInfo() {

    const patient = usePatient();

    function calculate_Age(patient:Patient):number{
        const now = new Date();
        return now.getFullYear() - patient.birthyear;
    }

    function give_gender(patient:Patient):string{
        if(patient.sex==1){
            return "homme";
        }else{
            return "femme";
        }
    }

    if(patient){
        return(<div>
            <ul>
                <li>Âge : {calculate_Age(patient)}</li>
                <li>Sexe : {give_gender(patient)}</li>
                <li>Taille : {patient.height} cm</li>
                <li>Poids initial : {patient.weightStart} kg</li>
                <li>IMC de départ : {patient.bmiStart}</li>
                <li><strong>Objectifs : {patient.weightGoal}kg, IMC {patient.bmiGoal}</strong></li>
            </ul>
        </div>)
    }else{
        return(<div><p>No data</p></div>)
    }

}

export default PatientInfo;