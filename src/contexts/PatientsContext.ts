import { createContext, useContext } from "react";
import type { Patient } from "../types";

export const PatientsContext = createContext<Patient[] | null>(null);
export const usePatients = () => useContext(PatientsContext);