{

    function countWordOccurrences(inputString:string, searchValue: string):number{
        let count= 0;
        const splitString= inputString.split(" ");
        for(let i=0 ; i<inputString.length; i++){
           
            if(splitString[i]===searchValue){
                count++;
            }
        }
        return count;
    }
    console.log(countWordOccurrences("I love typescript typescript", "typescript"));
}