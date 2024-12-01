{
    type Circle =  {
        shape: "circle";
        radius: number;
    };

    type Rectangle=  {
        shape: "rectangle";
        width: number;
        height: number;
    };

    type Cho_shape = Circle | Rectangle;

    function calculateShapeArea(shape:Cho_shape){
        
        if (shape.shape === "circle"){

            const result_1:number = 3.14 * shape.radius **2;
            return result_1;
        }

        else if (shape.shape === "rectangle"){

            const result_2:number = shape.width * shape.height;
            return result_2;
        }
    }
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea); 
    
    // Sample Input 2
    const rectangleArea = calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    });
     /*
    console.log(rectangleArea);
    */
    


}