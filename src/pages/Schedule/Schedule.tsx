import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);
export function Schedule() {
  return (
    <div>
      <h1>Schedule</h1>

      <DragAndDropCalendar
        defaultDate={moment().toDate()}
        defaultView="week"
        events={[{}]}
        localizer={localizer}
        resizable
        className="calendar"
      />
    </div>
  );
}
