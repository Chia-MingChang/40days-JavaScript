/*Task5 Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. 
 March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
*/

let month = 5; 
function zodiacSign(month) {
    switch (month) {
        case 3: return "Pisces";
        case 4: return "Aries";
        case 5: return "Taurus";
        case 6: return "Gemini";
        case 7: return "Cancer";
        case 8: return "Leo";
        case 9: return "Virgo";
        case 10: return "Libra";
        case 11: return "Scorpio";
        case 12: return "Sagittarius";
        case 1: return "Capricorn";
        case 2: return "Aquarius";
        default: return "Invalid month";
    }
}

// Example usage
console.log(`Your zodiac sign is: ${zodiacSign(month)}`);
console.log(`Your zodiac sign is: ${zodiacSign(month)}`);