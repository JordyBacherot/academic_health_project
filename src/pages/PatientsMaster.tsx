import RenderPatients from "../component/RenderPatients.tsx";

function PatientsMaster() {

    return (
        <div>
            <div className="detail_page">
                <RenderPatients/>
            </div>
        </div>

    );
}

export default PatientsMaster;


//TODO : Caroussel

//TODO : Search bar

// TODO : EDT

//TODO: This page should not be accessed if not connected to pro account

//TODO : This should be the page by default when connected (guess we use contexts for that?)