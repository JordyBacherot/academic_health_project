import {usePatients} from "../contexts/PatientsContext.ts";
import {useRef} from "react";

function Carrousel(){
 // todo : recupérer les infos des patients
    const carrouselRef = useRef(null);
    const patients = usePatients()
    console.log(patients[0])

const scrollLeft = () => {
    if (carrouselRef.current) {
        const scrollAmount = carrouselRef.current.offsetWidth * 0.8; // 80% de la largeur visible
        carrouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
};

const scrollRight = () => {
    if (carrouselRef.current) {
        const scrollAmount = carrouselRef.current.offsetWidth * 0.8; // 80% de la largeur visible
        carrouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
};
    return (
        <div className="carrousel">
            <button className="button_left_carrou" onClick={scrollLeft}>◀</button>
            <div className="carrousel_container" ref={carrouselRef}>
                {patients?.map((patient) => (
                    <div key={patient.id} className="carrousel_item">
                        <img
                            src={patient.sex === 1 ? "user-masculin.svg" : "user-feminin.svg"}
                            alt="Patient Icon"
                        />
                        <p>{patient.firstname} {patient.lastname}</p>
                    </div>
                    ))
                }
            </div>
            <button className="button_right_carrou" onClick={scrollRight}>▶</button>
        </div>
    )
}

export default Carrousel;