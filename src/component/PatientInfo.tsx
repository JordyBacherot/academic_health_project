import {Patient} from "../types.tsx";
import { usePatient } from "../contexts/PatientContext";

function PatientInfo() {

    const patient = usePatient();

    const bmiTranslation: Record<string, string> = {
        "underweight": "Insuffisance pondérale",
        "normal": "Poids normal",
        "overweight": "Surpoids",
        "moderate obesity": "Obésité modérée",
        "severe obesity": "Obésité sévère",
        "morbid obesity": "Obésité morbide",
    };


    const activityTranslation: Record<string, string> = {
        "sedentary": "Sédentaire",
        "low active": "Activité faible",
        "somewhat active": "Activité modérée",
        "active": "Activité standard",
        "highly active": "Activité importante",
        "": null
    };

    function translateValue<T extends Record<string, string>>(
        dict: T,
        key: string,
        label = "Inconnu"
    ): string {
        if (!dict[key]) {
            console.warn(`Unknown value: ${key}`);
        }
        return dict[key] ?? label;
    }

    function calculateCalories(patient: Patient) {
        if (!patient.sex || !patient.weightStart || !patient.height || !patient.birthyear) return "Données manquantes";

        const age = calculate_Age(patient);
        const bmr =
            patient.sex == 1
                ? 10 * patient.weightStart + 6.25 * patient.height - 5 * age + 5
                : 10 * patient.weightStart + 6.25 * patient.height - 5 * age - 161;

        const activityFactors: Record<string, number> = {
            "sedentary": 1.2,
            "low active": 1.2,
            "somewhat active": 1.55,
            active: 1.55,
            "highly active": 1.9,
            "": "niveau d'activité inconnu"
        };

        const activityFactor = activityFactors[patient.activityProfile] || 1.2;
        const maintenanceCalories = bmr * activityFactor;

        let finalCalories = maintenanceCalories;
        if (patient.weightStart > patient.weightGoal) {
            finalCalories -= 500; // typical deficit
        } else if (patient.weightStart < patient.weightGoal) {
            finalCalories += 500; // typical surplus
        }
            return Math.round(finalCalories);
        }



        function calculate_Age(patient: Patient): number | null {
            const now = new Date();
            if (patient.birthyear != null) {
                return now.getFullYear() - patient.birthyear;
            } else {
                return null;
            }

        }

        function give_gender(patient: Patient): string {
            if (patient.sex == 1) {
                return "homme";
            }
            if (patient.sex == null) {
                return null;
            } else {
                return "femme";
            }
        }

        if (patient) {
            return (<div>
                <ul>
                    {patient.birthDate && (
                        <li>Âge : {calculate_Age(patient)}</li>
                    )}
                    {patient.sex && (
                        <li>Sexe : {give_gender(patient)}</li>
                    )}
                    {patient.height != null && (
                        <li>Taille : {patient.height} cm</li>
                    )}
                    {patient.weightStart != null && (
                        <li>Poids initial : {patient.weightStart} kg</li>
                    )}
                    {patient.bmiStart && (
                        <li>IMC de départ : {translateValue(bmiTranslation, patient.bmiStart)}</li>
                    )}

                    {patient.activityProfile != null && (
                        <li>Niveau d'activité : {translateValue(activityTranslation, patient.activityProfile)}</li>
                    )}

                    {(patient.weightGoal != null) && (
                        <li>
                            <strong>
                                Objectifs :
                                Poids idéal : ${patient.weightGoal} kg
                                IMC voulu : {translateValue(bmiTranslation, patient.bmiGoal)}
                            </strong>
                        </li>
                    )}
                    <li>Calories recommandées : {calculateCalories(patient)}</li>
                </ul>
            </div>)
        } else {
            return (<div><p>No data</p></div>);
        }
}

export default PatientInfo;