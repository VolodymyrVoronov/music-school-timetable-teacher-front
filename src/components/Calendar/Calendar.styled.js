import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s32, s48, s64, s160 } from "./../../styles/spacer";

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;

  margin: auto;
  margin-top: ${s160};
  margin-bottom: ${s64};

  padding: ${s48};

  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

const CalendarTitle = styled.h2`
  display: flex;
  justify-content: center;

  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  text-align: center;

  color: ${colors.primary};
`;

const CalendarBlock = styled.div`
  display: flex;

  margin-top: ${s48};

  .DayPicker-Month {
    margin-left: 0;
    margin-right: 0;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside) {
    border-radius: 0;
    transition: 0.5s ease;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: ${colors.primary};
    color: ${colors.white};
    border-radius: 0;

    transition: 0.3s ease;
  }

  .DayPicker-Day--disabled {
    color: ${colors.fail};
  }

  .DayPicker-Day--today {
    color: ${colors.primary};
    text-decoration: underline;
  }

  .DayPicker-Day--highlighted {
    background-color: ${colors.primary};
    color: ${colors.white};
    border-radius: 0;
  }

  .DayPicker-NavButton {
    right: 0;
  }

  .DayPicker-Footer {
    display: flex;
    justify-content: center;

    margin-top: 15px;
  }

  .DayPicker-TodayButton {
    font-size: 18px;

    color: ${colors.primary};
  }
`;

const CalendarButtons = styled.div`
  div {
    display: flex;

    width: 100%;
  }

  width: 100%;

  margin-top: ${s32};
`;

export { CalendarContainer, CalendarTitle, CalendarBlock, CalendarButtons };
