export class MobileComponent  {
  private mobileId: number;
  private mobileName: string;
  private mobileCost: number;
  constructor(private mId:number,private mName: string,private mCost: number) { 
    this.mobileId=mId;
    this.mobileName=mName;
    this.mobileCost=mCost;
  }

  printMobileDetails():string  {
    return "  Mobile Id is:  "+this.mId+"  Mobile Name is:  "+this.mName+"  Mobile Cost is:  "+this.mCost;

}

}
