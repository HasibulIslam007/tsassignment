{
    type allThe={
        name:string;
        age: number;
    }
    function getProperty<X , Y extends keyof X>(obj: X , key: Y): X[Y]{
        return obj[key];

    }
    const person1 = { name: "Alice", age: 30 };
    const person3 = { name: "TOhid", age: 32 };
    const person4 = { name: "Kmala", age: 55 };

    console.log(getProperty(person1, "name"));
    console.log(getProperty(person3, "age"));
    console.log(getProperty(person4, "name"));
}