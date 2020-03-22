module.exports = function toReadable (number) {
    const numsString = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight',9: 'nine', 
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
        20: 'twenty', 30:'thirty',  40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety'
    };

    let result = '';

    if(number === 100) return 'one hundred';

    if(number <= 20 || (Number.isInteger(number/10) && number < 100))
        return numsString[number];

    if(number > 100)
        result = `${numsString[Math.floor(number / 100)]} hundred`;

    number = number % 100;

    if(number === 0)  return result;

    if(number <= 20 || (Number.isInteger(number/10)))
        result = result + ' ' + numsString[number];
    else
        result = result + ` ${numsString[Math.floor(number / 10) * 10]} ${numsString[Math.floor(number % 10)]}`; 
    
    return result.trim();
}
