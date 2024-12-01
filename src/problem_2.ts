{
    function removeDuplicates(numbers: number[]): number[] {
        const unseenNumber: number[] =[];
        
        let i =0;
    
        while(i<numbers.length){
            let j= 0;
            let isDuplicate = false;

            while(j<numbers.length){
                if(numbers[i]===unseenNumber[j]){                   
                    isDuplicate = true;
                    break;
                }
                j++;
            }
            if (!isDuplicate) {
                unseenNumber.push(numbers[i]);
            }           
            i++;                
        }
        return unseenNumber;
    }
    const reNum= removeDuplicates([1, 2, 2,5,6,6,6, 3, 4,2,2,2,1,1, 4, 5]);
    console.log(reNum);
}