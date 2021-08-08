import React from "react";
import { useHistory } from "react-router-dom";
import DayPicker from "react-day-picker";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from "./../../const/const";

import Button from "../common/UI/Button/Button";

import { CalendarContainer, CalendarTitle, CalendarBlock, CalendarButtons } from "./Calendar.styled";

import "react-day-picker/lib/style.css";

const Calendar = (): React.ReactElement => {
  let history = useHistory();

  const onDayClick = (e: { toLocaleString: (arg0: string, arg1: { timeZoneName: string }) => string }): void => {
    history.push({
      pathname: "/timetable-editor",
      state: {
        chosenDate: e.toLocaleString("uk-UA", { timeZoneName: "short" }).slice(0, 10),
      },
    });
  };

  const onCancelButtonClick = () => {
    history.replace("/account");
  };

  return (
    <Slide top>
      <CalendarContainer>
        <Slide top>
          <CalendarTitle>Выберите дату для редактирования расписания.</CalendarTitle>
        </Slide>

        <Slide top>
          <CalendarBlock>
            <DayPicker
              onDayClick={onDayClick}
              // onDayMouseEnter={onDayMouseEnter}
              locale="ru"
              months={MONTHS}
              weekdaysLong={WEEKDAYS_LONG}
              weekdaysShort={WEEKDAYS_SHORT}
              firstDayOfWeek={1}
              // modifiers={modifiers}
              todayButton="Сегодня"
              // onTodayButtonClick={(day, modifiers) => {}}
              disabledDays={[new Date(2017, 3, 12), { daysOfWeek: [0, 6] }]}
            />
          </CalendarBlock>
        </Slide>

        <CalendarButtons>
          <Slide top>
            <Button primary text="Назад" onClick={onCancelButtonClick} />
          </Slide>
        </CalendarButtons>
      </CalendarContainer>
    </Slide>
  );
};

export default Calendar;
