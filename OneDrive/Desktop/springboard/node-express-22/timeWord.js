function timeToWords(time) {


    
    const [hours, minutes] = time.split(':').map(Number);  
    const isAM = hours < 12; 
    const hourIn12 = hours % 12 === 0 ? 12 : hours % 12;  
  
 
    const hourWords = [
      "midnight", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"
    ];
    
    const minuteWords = [
      "oh", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
      "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", 
      "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine",
      "thirty", "thirty one", "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine",
      "forty", "forty one", "forty two", "forty three", "forty four", "forty five", "forty six", "forty seven", "forty eight", "forty nine", 
      "fifty", "fifty one", "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine"
    ];
  
    
    if (hours === 0 && minutes === 0) return hourWords[0];  
    if (hours === 12 && minutes === 0) return "noon";  
  
    
    const ampm = isAM ? 'am' : 'pm';
    
    let minuteStr = "";
    if (minutes === 0) {
      minuteStr = "o’clock";  
    } else if (minutes === 30) {
      minuteStr = "thirty";  
    } else if (minutes < 10) {
      minuteStr = `oh ${minuteWords[minutes]}`;  
    } else {
      minuteStr = minuteWords[minutes];  
    }
  
    
    if (hours === 0 || hours === 12) {
      return `${hourWords[12]} ${minuteStr} ${ampm}`;
    }
  
  
    return `${hourWords[hourIn12]} ${minuteStr} ${ampm}`;
  }
  
  module.exports = timeToWords;



