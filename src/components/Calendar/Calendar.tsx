import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import DayPicker from "react-day-picker";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { getChosenDateAC } from "../../store/reducers/timeTableEditorReducer/actions";

import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from "./../../const/const";

import Button from "../common/UI/Button/Button";

import { CalendarContainer, CalendarTitle, CalendarBlock, CalendarButtons } from "./Calendar.styled";

import "react-day-picker/lib/style.css";

const Calendar = (): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("profile") || "{}").token;

  const onDayClick = (e: { toLocaleString: (arg0: string, arg1: { timeZoneName: string }) => string }): void => {
    const date = e.toLocaleString("uk-UA", { timeZoneName: "short" }).slice(0, 10);
    dispatch(getChosenDateAC(date));

    history.push({
      pathname: "/timetable-editor",
      state: {
        chosenDate: date,
      },
    });
  };

  const onCancelButtonClick = () => {
    history.replace("/account");
  };

  React.useEffect(() => {
    if (!token) {
      history.replace("/start-page");
    }
  }, []);

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
