import {Calendar, Event, dayjsLocalizer} from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import {useState, useEffect} from 'react';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "/src/component/calendarStyle.css";
import {get_rendezvous} from "../service/serviceSupabaseAPI.ts";
import dayjs from 'dayjs'
import 'dayjs/locale/fr'

dayjs.locale('fr')

const localizer = dayjsLocalizer(dayjs)

// Définir les interfaces pour TypeScript
interface CalendarEvent extends Event {
  title: string;
  start: Date;
  end: Date;
}

interface RendezVous {
  id: number;
  start_date: string;
  end_date: string;
  user_id: number;
}

const lang = {
    week: 'Semaine',
    work_week: 'Semaine de travail',
    day: 'Jour',
    month: 'Mois',
    previous: '◀',
    next: '▶',
    today: `Aujourd'hui`,
    agenda: 'Agenda',
    showMore: (total :number) => `+${total} plus`,
}

const DnDCalendar = withDragAndDrop<CalendarEvent>(Calendar);

function SchedulerComponent() {


    const [events, setEvents] = useState<CalendarEvent[]>([
        {
            start: dayjs().toDate(),
            end: dayjs().add(1, "day").toDate(),
            title: "Rendez-vous",
        },
    ]);

    useEffect(() => {
        const fetchRendezvous = async () => {
            const dataRdv = await get_rendezvous();
            if (dataRdv) {
                console.log(dataRdv);
                const formattedEvents = dataRdv.map((rdv: RendezVous) => ({
                    start: new Date(rdv.start_date),
                    end: new Date(rdv.end_date),
                    title: "Rendez vous de : " + rdv.user_id || "Rendez-vous",
                }));
                setEvents(formattedEvents);
            }
        };

        fetchRendezvous();
    }, []);

    return (
        <div className="scheduler element">
            <DnDCalendar
                defaultDate={dayjs().toDate()}
                defaultView="day"
                events={events}
                localizer={localizer}
                resizable
                style={{ height: "80vh", margin: "20px" }}
                messages = {lang}
                culture="fr"
            />
        </div>
    );
}

export default SchedulerComponent;