export class Achievement {
  public _id: number;
  public aid: number;
  public name: string;
  public desc: string;
  public diff: number;
  public points: number;

  constructor(_id: number, aid: number, name: string, desc: string, diff: number, points: number, icon: string) {
    this._id = _id;
    this.aid = aid;
    this.name = name;
    this.desc = desc;
    this.diff = diff;
    this.points = points;
  }
}
