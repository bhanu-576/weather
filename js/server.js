const http = require('http');
const fs = require('fs');
const requests = require('requests');
const async = require('async');
// const obj = {'../index.html','../css/styleMedia.css','index.js'};
const homeFile = fs.readFile('.../index.html','utf-8',(err,data)=>{
  console.log(data);
})
const replaceVal = (tempVal,orgVal) =>{
      let temperature = tempVal.replace('{%tempval%}',orgVal.main.temp);
      temperature =  temperature.replace('{%tempmin%}',orgVal.main.temp_min);
      temperature =  temperature.replace('{%tempmax%}',orgVal.main.temp_max);
      temperature =  temperature.replace('{%location%}',orgVal.name);
      temperature =  temperature.replace('{%country%}',orgVal.sys.country);
      return temperature;
}

const server = http.createServer((req,res) => {
    if(req.url == '/') {
        requests(
'https://api.openweathermap.org/data/2.5/weather?q=Mathura&appid=3b28e9abd4648b43df6fc8683b5b6d62')
.on('data', (chunk) => {
  const objdata = JSON.parse(chunk);
  const arrData = [objdata];
  // console.log(arrData[0].main.temp);
  const realTimeData = arrData.map((val) => replaceVal(homeFile,val)).join("");
  res.write(realTimeData);
  // console.log(realTimeData);
})
.on('end',(err) =>{
  if (err) return console.log('connection closed due to errors', err);
  console.log('end');
  res.end();
});
    }
});

server.listen(8000, '127.0.0.1');