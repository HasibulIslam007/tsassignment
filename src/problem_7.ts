{
    class Car{
        name: string;
        model: string;
        year: number;

        constructor(name:string,model:string, year:number){
            this.name = name;
            this.model =model;
            this.year = year;
        }
        getCarAge():number {
            const presentYear = 2024;
            const carAge = presentYear-this.year;
            return carAge;
            
        }
    }
    /*
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());

    /*


}