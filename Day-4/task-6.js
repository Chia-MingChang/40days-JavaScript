/*Task6

*/



function Triangle(silde1, slide2, slide3){
        if(!(slide1 > 0 && slide2 > 0 && slide3 > 0)) {
            return "Invalid triangle. All sides must be positive numbers.";
        }
         if(!(slide1 + slide2 > slide3 && slide1 + slide3 > slide2 && slide2 + slide3 > slide1)) {
                                                return "Invalid triangle. The sum of any two sides must be greater than the third side.";;
                                            }
        if (slide1 === slide2 && slide2 === slide3&& slide1 === slide3) {
            return "Equilateral triangle";
        }
        else if (slide1 === slide2 || slide2 === slide3 || slide1 === slide3) {
            return "Isosceles triangle";
        } else {
            return "Scalene triangle";
        }
    }


// Example usage
console.log(Triangle(3, 3, 3)); // Equilateral triangle
console.log(Triangle(3, 4, 3)); // Isosceles triangle