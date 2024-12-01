->Union: To apply on and several types in a function we use Union.

example:

{
    type Union = string  | number;

    let val: Union;

    val = "string";
    val = 134;
}

by using  Union now the val can be string  or number.


->Intersection : It's combine multiple types into one and need to insure all the mention type are present.


{
   type  num1 = {x: number} 
   type  num2 = {y: number} 
   type  st1 = {z: string} 

   type all = num1 & num2 & st1;

   const val: all ={x:12 , y:43 , z: 'dsd'};
}

It's combine 2 number and 1 string .It's eed to  satisfy by all the porperties.