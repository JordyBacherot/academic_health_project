// import { useEffect, useState } from "react";

function Carrousel(){
 // todo : recupérer les infos des patients


    return (
        <div className="carrousel">
            <div className="carrousel__container">
                <div className="carrousel__item">
                    <img src="../public/background.png" alt="Patient 1"/>
                    <p>Patient 1</p>
                </div>
                <div className="carrousel__item">
                    <img src="../public/background.png" alt="Patient 2"/>
                    <p>Patient 2</p>
                </div>
                <div className="carrousel__item">
                    <img src="../public/background.png" alt="Patient 3"/>
                    <p>Patient 3</p>
                </div>
            </div>
        </div>
    )
}

export default Carrousel;