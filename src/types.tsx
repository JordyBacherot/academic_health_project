import {ReactNode} from "react";

export type ContextProviderProps = {
    children: ReactNode;
};

export type GraphType = "physical" | "psychological" | "physiological";

export type GraphProps = {
    data:number[];
}

export type Patient = {
    id: string;
    firstname: string;
    lastname: string;
    birthyear: number;
    height: number;
    weightStart: number;
    weightGoal: number;
    bmiStart: string;
    bmiGoal: string;
    activityProfile:string;
    sex: number;
    physicalActivities:number[];
    physiologicalData:number[];
}

export interface MenuPatientProps {
    id: string | undefined;
}