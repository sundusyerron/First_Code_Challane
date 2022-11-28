function submit(){
    let  SpeedOfCar =parseInt(document.getElementById("speedOfCar").value) ;
    if (SpeedOfCar <= 70)
        document.getElementById("status").innerHTML='OK'
        
     
    else if (SpeedOfCar > 70)  {
        const points = (SpeedOfCar - 70)/5

        if (points >= 12)
        document.getElementById("status").innerHTML='Licence Suspended'

        }
    
    }



