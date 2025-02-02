import { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import { TimeViewWithMeridiem } from '../internals/models';

// maps TimeView to its translation
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'Ore',
  minutes: 'Minute',
  seconds: 'Secunde',
  meridiem: 'Meridiane',
};

const roROPickers: Partial<PickersLocaleText<any>> = {
  // Calendar navigation
  previousMonth: 'Luna anterioară',
  nextMonth: 'Luna următoare',

  // View navigation
  openPreviousView: 'Deschideți vizualizarea anterioară',
  openNextView: 'Deschideți vizualizarea următoare',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    view === 'year'
      ? 'Vizualizarea anuală este deschisă, comutați la vizualizarea calendarului'
      : 'Vizualizarea calendarului este deschisă, comutați la vizualizarea anuală',

  // DateRange placeholders
  start: 'Început',
  end: 'Sfârșit',

  // Action bar
  cancelButtonLabel: 'Anulare',
  clearButtonLabel: 'Ștergere',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Astăzi',

  // Toolbar titles
  datePickerToolbarTitle: 'Selectați data',
  dateTimePickerToolbarTitle: 'Selectați data și ora',
  timePickerToolbarTitle: 'Selectați ora',
  dateRangePickerToolbarTitle: 'Selectați intervalul de date',

  // Clock labels
  clockLabelText: (view, time, adapter) =>
    `Selectați ${timeViews[view] ?? view}. ${
      time === null
        ? 'Nicio oră selectată'
        : `Ora selectată este ${adapter.format(time, 'fullTime')}`
    }`,
  hoursClockNumberText: (hours) => `${hours} ${timeViews.hours}`,
  minutesClockNumberText: (minutes) => `${minutes} ${timeViews.minutes}`,
  secondsClockNumberText: (seconds) => `${seconds}  ${timeViews.seconds}`,

  // Digital clock labels
  selectViewText: (view) => `Selectați ${timeViews[view]}`,

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Număr săptămână',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => `Săptămâna ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,

  // Open picker labels
  openDatePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `Selectați data, data selectată este ${utils.format(value, 'fullDate')}`
      : 'Selectați data',
  openTimePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `Selectați ora, ora selectată este ${utils.format(value, 'fullTime')}`
      : 'Selectați ora',

  // Table labels
  timeTableLabel: 'Selectați ora',
  dateTableLabel: 'Selectați data',

  // Field section placeholders
  fieldYearPlaceholder: (params) => 'A'.repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => (params.contentType === 'letter' ? 'LLLL' : 'LL'),
  fieldDayPlaceholder: () => 'ZZ',
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => 'hh',
  fieldMinutesPlaceholder: () => 'mm',
  fieldSecondsPlaceholder: () => 'ss',
  fieldMeridiemPlaceholder: () => 'aa',
};

export const roRO = getPickersLocalization(roROPickers);
