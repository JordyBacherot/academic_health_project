import MenuPrincipal from "../component/MenuPrincipal.tsx";

function PatientDetails(id:string) {
    console.log(id);
    return (<div><MenuPrincipal/></div>);
}

export default PatientDetails;

//TODO : global presentation (picture + name)

//TODO : menu for accessing basic infos, psychological, physical, physiological datas

//TODO : graphs for physio, psycho, physical datas

//TODO : chatbot at the end of the page, for special training according to patients data

//TODO: This page should not be accessed if not connected to pro account