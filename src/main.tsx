import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import PatientsMaster from "./pages/PatientsMaster.tsx";
import PatientDetails from "./pages/PatientDetails.tsx";
import Login from "./pages/Login.tsx";
import PatientDatas from "./component/PatientDatas.tsx"
import PatientInfo from "./component/PatientInfo.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />

            <Route path="patients">
                <Route index element={<PatientsMaster />} />
                <Route path=":id" element={<PatientDetails />}>
                    <Route path="patientInfos" element={<PatientInfo />} />
                    <Route path="patientPhysio" element={<PatientDatas graphType="physiological" />} />
                    <Route path="patientPhysic" element={<PatientDatas graphType="physical" />} />
                    <Route path="patientPsychic" element={<PatientDatas graphType="psychological" />} />
                </Route>
            </Route>

            <Route path="login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>,
)
