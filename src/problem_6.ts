{
    interface Profile {
        name:string;
        age: number;
        email: string;
    }

    function updateProfile(proFile:Profile , upDate:Partial<Profile>):Profile{
        return{
            ...proFile,
            ...upDate
        };

    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
}