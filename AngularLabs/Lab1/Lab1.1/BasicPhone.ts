import { MobileComponent} from './MobileComponent';

export class BasicPhone extends MobileComponent{
    private MobileType:String;
    constructor(mId: number,mName: string,mCost: number,private mType:String)
    {
        super(mId,mName,mCost);
        this.MobileType=mType;
    }
    mobileInfo():string{
        return this.printMobileDetails()+"  Mobile Type is:  "+this.mType;
    }
}
let m1=new BasicPhone(1,"Redmi note 5",20000,"Basic Type");
let m2=new BasicPhone(3,"Redmi note 6",30000,"Basic Type");
let m3=new BasicPhone(5,"Redmi note 7",40000,"Basic Type");

let btype:BasicPhone[]=[new BasicPhone(2,"Redmi note 8",25000,"BasicType"),new BasicPhone(4,"Redmi note 9",35000,"Basic Type")];

btype.push(m1);
btype.push(m2);
btype.push(m3);

for(let i=0;i<btype.length;i++){
    console.log(btype[i].mobileInfo()+" ");
}

