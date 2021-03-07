const curDate = document.getElementById('date');
let wheathercon = document.getElementById('wheathercon');

const tempStatus = 'Clouds';
// current day and time
const getCurrentDay = () =>{
    let weekday = new Array(7);
    weekday[0] = 'Sun';
    weekday[1] = 'Mon';
    weekday[2] = 'Tue';
    weekday[3] = 'Wed';
    weekday[4] = 'Thr';
    weekday[5] = 'Fri';
    weekday[6] = 'Sat';
    let currentTime = new Date();
    const day = weekday[currentTime.getDay()];
    return day;
};
    const getCurrentTime = () => {
        let months =[
            'Jan',
            'Feb',
            'mar',
            'Apr',
            'May',
            'june',
            'july',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
        ];

        let now = new Date();
        let month = months[now.getMonth() + 1];
        let date = now.getDate();

        let hours = now.getHours();
        let minute = now.getMinutes();
         let periods ='AM';
         if(hours > 11) {
             periods = 'PM';
             if(hours > 12) hours -= 12;
         }
         if(minute < 10) {
             minute = '0' + minute;
         }
        
         return `${month} ${date}  | ${hours}:${minute}${periods}`;
    };
  curDate.innerHTML =   getCurrentDay() + ' | ' +getCurrentTime();
