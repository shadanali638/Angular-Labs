import { MobileComponent} from "./MobileComponent";

export class SmartPhone extends MobileComponent{
    private MobileType:String;
    constructor(mId: number,mName: string,mCost: number,private mType:String)
    {
        super(mId,mName,mCost);
        this.MobileType=mType;
    }
    MobileInfo():string{
        return this.printMobileDetails()+"  Mobile Type is:  "+this.mType;
    }
}
let m1=new SmartPhone(101,"OnePlus 5",50000,"Smart Type");
let m2=new SmartPhone(103,"OnePlus 6",60000,"Smart Type");
let m3=new SmartPhone(105,"OnePlus 7",70000,"Smart Type");

let stype:SmartPhone[]=[new SmartPhone(102,"OnePlus 8",55000,"Smart Type"),new SmartPhone(104,"OnePlus 9",65000,"Smart Type")];

stype.push(m1);
stype.push(m2);
stype.push(m3);

for(let i=0;i<stype.length;i++){
    console.log(stype[i].MobileInfo()+" ");
}