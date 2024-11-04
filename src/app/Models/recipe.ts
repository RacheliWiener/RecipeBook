export interface Recipe {
    name:string,
    category : string,
    products:string[],
    instructions:string[],
    levelOfDifficulty:number,
    page:number,
    love:boolean ,
    numOfDishes:number,
    pic?:string
}
