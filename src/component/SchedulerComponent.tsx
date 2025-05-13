import {Calendar, momentLocalizer, Event, dayjsLocalizer} from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import {useState, useEffect} from 'react';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "/src/component/calendarStyle.css";
import {get_rendezvous} from "../service/serviceSupabaseAPI.ts";
import dayjs from 'dayjs'

const localizer = dayjsLocalizer(dayjs)

// Définir les interfaces pour TypeScript
interface CalendarEvent extends Event {
  title: string;
  start: Date;
  end: Date;
}

const lang = {
    week: 'Semaine',
    work_week: 'Semaine de travail',
    day: 'Jour',
    month: 'Mois',
    previous: '<<',
    next: '>>',
    today: `Aujourd'hui`,
    agenda: 'Agenda',
    showMore: (total :number) => `+${total} plus`,
}

const DnDCalendar = withDragAndDrop<CalendarEvent>(Calendar);

function SchedulerComponent() {


    const [events, setEvents] = useState<CalendarEvent[]>([
        {
            start: moment().toDate(),
            end: moment().add(1, "days").toDate(),
            title: "Rendez-vous",
        },
    ]);

    useEffect(() => {
        const fetchRendezvous = async () => {
            const dataRdv = await get_rendezvous();
            if (dataRdv) {
                console.log(dataRdv);
                const formattedEvents = dataRdv.map((rdv: any) => ({
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
                defaultDate={moment().toDate()}
                defaultView="month"
                events={events}
                localizer={localizer}
                resizable
                style={{ height: "80vh", margin: "20px" }}
                messages = {lang}
            />
        </div>
    );
}

export default SchedulerComponent;