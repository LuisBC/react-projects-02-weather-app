import dayjs from "dayjs";
import * as localeData from "dayjs/plugin/localeData";

dayjs.extend(localeData);

export const getWeekday = (date: string) =>
  dayjs().locale("en-us").localeData().weekdays()[dayjs(date).day()];
