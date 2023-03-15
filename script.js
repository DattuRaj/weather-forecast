
const input=document.getElementById('input')
const submit=document.getElementById('submit')

const apikey="2e339c46430e7fc158abdac7d9dcce27"  //api key  
//to show which day 
const week=["Sun' day","Mon' day","Tue' day","Wed' day","Thu' day","Fri' day","Sat' day"]

// function it execute by clicking submit 
submit.onclick=function(){
    
    if(input.value=="")
        alert('enter something')
    else
    {
        loc=input.value
        //url can get from weather api
        url=`https://api.openweathermap.org/data/2.5/forecast?q=${loc}%20&appid=2e339c46430e7fc158abdac7d9dcce27`
        
        //fetching from url and converting into json
        fetch(url).then(res=>res.json())
        //resulved state
        .then(data=>{
           
           document.getElementById('div2').innerHTML=null       //assigned null to div2 
           console.log(data)
        
           for(i=0;i<40;i++)                                        //used loop 
           {
            if(i%8==0)                                  //for every 24 hours it execute
            {
                console.log(data)
                const temp=Math.floor((data.list[i].main.temp)-273)
                const loca=data.city.name                               // city name
                const d=new Date(data.list[i].dt_txt)               //using day function 
                const date=d.getDay()                               //it return value range is 0-6
                const icon=data.list[i].weather[0].icon              //icon get
             
                const weat=data.list[i].weather[0].description  //
              
                document.getElementById('div2').innerHTML+=`
                <div id="id1">
                <br>
                <span id="week">${week[date]}</span> <br>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png"><br>
                <b id="temp">${temp}</b><span>&#176</span><span>C</span><br>
                <p id="weather"> ${weat}</p>
                <h2 id="location"> ${loca}</h2>
                </div>`

            }
           }
        })
    }
}


