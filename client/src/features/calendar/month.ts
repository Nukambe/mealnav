export class Month {
  days: Date[] = [];
  month: number;
  year: number;
  firstDay: Date;
  lastDay: Date;

  constructor(month: number, year: number) {
    this.month = month;
    this.year = year;
    this.firstDay = new Date(this.year, this.month, 1);
    this.lastDay = new Date(this.year, this.month + 1, 0);

    this.fillCurrentMonth();
    this.fillPreviousMonth();
    this.fillNextMonth();
  }

  private fillCurrentMonth() {
    const days = this.daysInMonth();
    for (let i = 1; i <= days; i++) {
      this.days.push(new Date(this.year, this.month, i));
    }
  }

  private fillPreviousMonth() {
    const days = this.firstDay.getDay();
    for (let i = 0; i < days; i++) {
      this.days.unshift(new Date(this.year, this.month, -i));
    }
  }

  private fillNextMonth() {
    const days = 6 - this.lastDay.getDay();
    for (let i = 1; i <= days; i++) {
      this.days.push(new Date(this.year, this.month + 1, i));
    }
  }

  private daysInMonth() {
    return this.lastDay.getDate() - this.firstDay.getDate() + 1;
  }

  isCurrentMonth(date: Date) {
    return date.getMonth() === this.month;
  }

  isEqual(date: Date | null, other: Date) {
    if (!date) return false;
    return date.toDateString() === other.toDateString();
  }
}
