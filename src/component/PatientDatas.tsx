import {useParams} from "react-router";
import {useState} from "react";
import {GraphType, Patient} from "../types.tsx";

function PatientDatas({ graphType }: { graphType: GraphType }) {

    const id = useParams();
    const [patientData, setPatientData] = useState();
    console.log(graphType);

    return(<></>)

}

export default PatientDatas;