export class User {
  public id: number;
  public ref: string;
  public name: string;
  public achieves: number[];
  public total: number;

  constructor(id: number, ref: string, name: string, achieves: number[], total: number) {
    this.id = id;
    this.ref = ref;
    this.name= name;
    this.achieves = achieves;
    this.total = total;
  }
}
