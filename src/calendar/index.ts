import { CsCalendarInternal } from './internal.js';

export class CsCalendar extends CsCalendarInternal {}

customElements.define('cs-calendar', CsCalendar);

export type { CalendarProps } from './interfaces.js';
