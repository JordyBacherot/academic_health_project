import {useRef} from "react";
import {NavLink} from "react-router";
import {PatientsProps} from "../types.tsx";

function Carrousel({patients}:PatientsProps){
 // todo : recupérer les infos des patients
    const carrouselRef = useRef(null);
    if(patients){
        console.log(patients[0])
    }


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
                        <NavLink to={`/patients/${patient.id}`}>
                            <img
                                src={patient.sex === 1 ? "./icons/user-masculin.svg" : "./icons/user-feminin.svg"}
                                alt="Patient Icon"
                            />
                            <p>{patient.firstname} {patient.lastname}</p>
                        </NavLink>

                    </div>
                    ))
                }
            </div>
            <button className="button_right_carrou" onClick={scrollRight}>▶</button>
        </div>
    )
}

export default Carrousel;