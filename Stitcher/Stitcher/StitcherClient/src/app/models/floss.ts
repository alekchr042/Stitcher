export class Floss {
  public id: any = null;
  public colorNumber: string = null;
  public colorName: string = null;
  public brand: string = null;

  constructor(floss: any) {
    this.id = floss.id;
    this.colorNumber = floss.colorNumber;
    this.colorName = floss.colorName;
    this.brand = floss.brand;
  }
}