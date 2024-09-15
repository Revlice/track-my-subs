import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Abonelik verilerini örnek olarak burada belirtiyoruz
const events = [
    {
        title: 'Netflix Aboneliği Yenileme',
        start: new Date(2024, 8, 1),
        end: new Date(2024, 8, 1),
    },
    {
        title: 'Spotify Aboneliği Yenileme',
        start: new Date(2024, 6, 15),
        end: new Date(2024, 6, 15),
    },
];

const localizer = momentLocalizer(moment);

const Calendar = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Takvim</h1>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <BigCalendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </div>
        </div>
    );
};

export default Calendar;
