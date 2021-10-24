const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
export class Stat {
  public started: Date;
  private constructor(
    public name: string,
    public duration: number,
    started: string,
  ) {
    this.started = new Date(started);
  }

  public get remaining() {
    const now = Date.now();
    const end = this.started.getTime() + this.duration;
    return end - now;
  }

  public get remainingPercentage() {
    let result = (this.remaining * 100) / this.duration;
    result = parseInt(result.toFixed(0));
    return result;
  }

  public get humanDuration() {
    return this.duration / DAY;
  }

  public get humanRemaining() {
    if (this.remaining > DAY) return `${(this.remaining / DAY).toFixed(0)} day`;
    if (this.remaining > HOUR)
      return `${(this.remaining / HOUR).toFixed(0)} hour`;
    if (this.remaining > MINUTE)
      return `${(this.remaining / MINUTE).toFixed(0)} minute`;
    return `right now`;
  }

  public set humanDuration(value: number) {
    this.duration = value * DAY;
  }

  public toString() {
    return {
      name: this.name,
      duration: this.duration,
      started: this.started.toISOString(),
    };
  }

  static parse(data: string) {
    const statsObj: Array<any> = JSON.parse(data);
    if (statsObj.length > 0) {
      const parsedStats = statsObj.map(
        (stat) => new Stat(stat.name, stat.duration, stat.started),
      );
      return parsedStats;
    }
    return [];
  }

  static create(name: string, duration: number) {
    return new Stat(name, duration, new Date().toISOString());
  }
}
