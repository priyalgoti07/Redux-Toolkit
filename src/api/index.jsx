import Chance from "chance";
const chance = Chance()

export const fackData =()=>{
    console.log("Data", chance.name({ middle: true }));
    return chance.name({ middle: true })
}
// fackData();