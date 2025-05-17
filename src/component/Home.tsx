import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP, DrawSVGPlugin);


export default function Home(){
//<a target="_blank" href="https://icons8.com/icon/rMuvyqYyxruQ/trainers">Trainers</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/GzvKS578w6wn/heart-with-pulse">Health</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

    // const container = useRef();
    useGSAP(()=>{
        gsap.from(".heartbeat_graph", {
            duration:2,
            drawSVG: 0,
            repeat:-1,
            ease:"power1.inOut",
        });
    })

    const boxes = [
        "Un système de suivi personnalisé pour chaque patient, pourvu d'un moteur de recherche vous aidant à trouver n'importe lequel de vos patients en quelques secondes et d'accéder directement à son profil.",
        "Un profil détaillé pour chaque patient, incluant leurs données physiologiques, leurs données d'activité physique, et leurs données psychologiques.",
        "Un emploi du temps interactif, vous assistant dans l'organisation de vos rendez-vous et vous permettant de consulter les disponibilités de vos patients. Vous pourrez observer les rendez-vous par mois, semaine, jour, ou sous forme d'agenda vous indiquant les rendez-vous à suivre.",
        "Un chat global, vous donnant l'occasion d'échanger des informations et questions avec vos confrères utilisant l'application, ainsi qu'un chat individuel avec chaque patient, vous permettant de répondre à leurs questions et de les rassurer.",
        "Un chatbot vous suggérant un programme d'entraînement physique pour un patient, en se basant sur les informations que vous lui fournirez.",
    ];

    const images = [
        "/icons/icon_heart_home.png",
        "/icons/icon_graph_home.png",
        "/icons/icon_schedule_home.png",
        "/icons/connect.svg",
        "/icons/chat.png"
    ];

    const altTexts = [
        "a heart with pulse",
        "a graph",
        "a calendar",
        "a pen",
        "a chatbot"
    ];

    const paths = [
        "M0,540L141,540L232,93L280,887L381,529L498,529L610,93L646,887L776,388L873,617L960,529L1288,529L1427,93L1490,887L1612,410L1733,693L1804,529L1920,529",
        "M0,540L177,827L409,894L599,467L696,702L911,375L1104,197L1270,586L1448,716C1448,716 1602.74,353.256 1603,335C1603.26,316.744 1736,123 1736,123L1838,399L1920,123",
        "M0,540L233,540L233,70L1672,70L1672,1031L233,1031L233,144L1672,144L1672,441L233,441L233,790L1672,790L1672,1031L1441,1031L1441,70L860,70L860,1031L490,1031L490,70",
        "M423,50L423,360L140,360L140,50L1546,50L1546,141L601,141L601,247L1525,247L1525,360L1796,360L1796,653L1525,653L1525,360L730,360L730,438L1408,438L1408,515L448,515L448,603L1408,603",
        "M1801,800.367L1801,932L596,932L596,786.972M596,416L833,416L833,540L1042,540L1042,416L1338,416L1338,540L1573,540L1573,416L1801,416L1801,797L1430,797L1331.11,698.105L1241.09,788.116L1149.24,696.267L1048.78,796.733L955.291,703.244L874.174,784.36L596,784.36L596,786.972L596,246L862,246L862,68L960,135L1041,85L1065,151L1172,85L1218,151L1289,68L1353,151L1411,85L1458,151L1545.11,63.895L1545.11,246L1801,246L1801,800.367"
    ];

    const couleur_paths = [
        "rgb(255,54,207)",
        "rgb(143,243,242)",
        "rgb(174,199,248)",
        "rgb(216,204,252)",
        "rgb(163,197,241)"
    ]

    return (
        <>
            <div className = "text-xl flex items-center text-center justify-center font-weight : bold ">
                <img src="/icons/logo_small.svg" alt="logo application" className="mb-4 sm:w-10 sm:h-10 h-20 w-20 flex justify-center m-4 items-center start-0"/>
                HEALTH PROJECT
            </div>
            <div className = "bg-white/10 w-full max-width : 700px p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <p className = "text-center flex items-center justify-center">Une application où vous trouverez :</p>
            </div>
            <div className="flex flex-col gap-6 p-6 item-center justify-center sm:flex-col sm:flex-wrap sm:gap-4">
                {boxes.map((text, index) => (
                    <div
                        key={index}>
                        <div className="bg-blue-500/10 h-90 text-black shadow-lg p-4 rounded-lg flex items-center justify-center text-center margin-2">
                            {text}
                        </div>
                        <div className="bg-white/50 text-black shadow-lg p-4 rounded-lg flex justify-center margin-2 margin-top-2">
                            <img src={images[index]} alt={altTexts[index]} className="portrait:w-25 portrait:h-25 portrait:object-contain mb-4 opacity-50 portrait:mx-auto"/>
                            <svg className="w-full h-full lg:w-50 lg:h-24 " viewBox="0 0 1920 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
                                 style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 1.5 }}>
                                <path className="heartbeat_graph" d={paths[index]}
                                      style={{ fill: "none", stroke: couleur_paths[index], strokeWidth: "44.96px" }} />
                            </svg>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )}
