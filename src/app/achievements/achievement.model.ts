export class Achievement {
  public id: number;
  public name: string;
  public desc: string;
  public diff: number;
  public points: number;

  constructor(id: number, name: string, desc: string, diff: number, points: number, icon: string) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.diff = diff;
    this.points = points;
  }
}
