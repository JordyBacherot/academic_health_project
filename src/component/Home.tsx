
export default function Home(){
//<a target="_blank" href="https://icons8.com/icon/rMuvyqYyxruQ/trainers">Trainers</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/GzvKS578w6wn/heart-with-pulse">Health</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    return (
        <>
        <h1>Home</h1>
        <div className = "bg-white w-full max-width : 700px p-6 rounded-lg shadow-lg">
            <p className="text-2xl text-center font-weight : bold">Bienvenue sur l'application de gestion des patients</p>
        </div>
        <div className = "bg-white w-full max-width : 700px p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="/icons/logo.svg" alt="medecin" className="w-32 h-32 object-contain mb-4"/>
            <p className = "text-center flex items-center justify-center">Sur cette application, vous trouverez :</p>
        </div>
        <div className = "w-full max-width : 700px p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="/icons/icon_health_home.svg" alt="medecin" className="w-32 h-32 object-contain mb-4 opacity-60"/>
            <p className = "text-center flex items-center justify-center">Un système de suivi personnalisé pour chaque patient, 
                vous permettant de consulter leurs informations, leurs données physiologiques, 
                leurs données d'activité physique, et leurs données psychologiques à tout moment.</p>
        </div>
        <div className = "w-full max-width : 700px p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="/icons/icon_sports_home.svg" alt="medecin" className="w-32 h-32 object-contain mb-4 opacity-50"/>
            <p className = "text-center flex items-center justify-center">Un moteur de recherche vous aidant à trouver n'importe lequel de vos patients en quelques secondes et d'accéder directement à son profil</p>
        </div>    
        <div className = "w-full max-width : 700px p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="/icons/icon_sports_home.svg" alt="medecin" className="w-32 h-32 object-contain mb-4 opacity-50"/>
            <p className = "text-center flex items-center justify-center">Un emploi du temps interactif, vous assistant dans l'organisation de vos rendez-vous
                et vous permettant de consulter les disponibilités de vos patients. Vous pourrez observer les rendez-vous par mois, semaine, jour, ou sous forme d'agenda vous indiquant les rendez-vous à suivre.</p>
        </div>
        <div className = "w-full max-width : 700px p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="/icons/icon_sports_home.svg" alt="medecin" className="w-32 h-32 object-contain mb-4 opacity-50"/>
            <p className = "text-center flex items-center justify-center">Un chat global, vous donnant l'occasion d'échanger des informations et questions avec
                vos confrères utilisant l'application, ainsi qu'un chat individuel avec chaque patient, vous permettant de répondre à leurs questions et de les rassurer.</p>
        </div>
        <div className = "w-full max-width : 700px p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="/icons/icon_sports_home.svg" alt="medecin" className="w-32 h-32 object-contain mb-4 opacity-50"/>
            <p className = "text-center flex items-center justify-center">Un chatbot vous suggérant un programme d'entraînement physique pour un patient, 
                en se basant sur les informations que vous lui fournirez</p>
        </div>
        </>
    )
}