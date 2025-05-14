
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
            <img src="./public/icons/logo.svg" alt="medecin" className="w-32 h-32 object-contain mb-4"/>
            <p className = "text-center flex items-center justify-center">[METTRE NOM APPLI ICI]</p>
        </div>
        <div className = "bg-white w-full max-width : 700px p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="./public/icons/icon_health_home.svg" alt="medecin" className="w-32 h-32 object-contain mb-4 opacity-60"/>
            <p className = "text-center flex items-center justify-center">Vous pouvez organiser vos rendez-vous médicaux et surveiller votre santé ...</p>
        </div>
        <div className = "bg-white w-full max-width : 700px p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img src="./public/icons/icon_sports_home.svg" alt="medecin" className="w-32 h-32 object-contain mb-4 opacity-50"/>
            <p className = "text-center flex items-center justify-center">Ou consigner vos progrès et accomplissements sportifs !</p>
        </div>    
        </>
    )
}