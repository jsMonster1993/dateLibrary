const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
class DateFormat {
    constructor(date){
        this.dd = date.getDate()+"";
        this.day = weekDays[date.getDay()];
        this.day_int = date.getDay()+"";
        this.year = date.getFullYear()+"";
        this.hours = date.getHours()+"";
        this.millisec = date.getMilliseconds()+"";
        this.minutes = date.getMinutes()+"";
        this.month = months[date.getMonth()];
        this.month_int = (parseInt(date.getMonth()+1)).toLocaleString('en-US', {minimumIntegerDigits: 2});
        this.seconds = date.getSeconds()+"";
        this.unix_date = date.getTime();
    };

    format(pattern){
        pattern = (pattern.indexOf("yy") > -1)?pattern.replace(new Array(pattern.match(/y/g).length + 1).join('y'),this.year.substring(0,pattern.match(/y/g).length)):pattern;
        pattern = (pattern.indexOf("d") > -1)?pattern.replace(new Array(pattern.match(/d/g).length + 1).join('d'),this.dd.substring(0,pattern.match(/d/g).length)):pattern;
        pattern = (pattern.indexOf("MM") > -1)?pattern.replace(new Array(pattern.match(/M/g).length + 1).join('M'),(pattern.match(/M/g).length > 2)?(pattern.match(/M/g).length > 3)?this.month:this.month.substring(0,3):this.month_int.substring(0,2)):pattern;
        pattern = (pattern.indexOf("D") > -1)?pattern.replace(new Array(pattern.match(/D/g).length + 1).join('D'),(pattern.match(/D/g).length > 2)?this.day:this.day.substring(0,3)):pattern;
        return pattern;
    };
}

export default DateFormat;