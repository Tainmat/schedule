import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

import * as S from "./Schedule.style";

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);
export function Schedule() {
  return (
    <S.Container>
      <DragAndDropCalendar
        formats={{
          dayFormat: (date) =>
            `${date.toLocaleDateString("pt-BR", {
              weekday: "short",
            })} ${date.getDate()}`,
        }}
        defaultDate={moment().toDate()}
        defaultView="week"
        events={[{}]}
        localizer={localizer}
        resizable
        className="calendar"
      />
    </S.Container>
  );
}
