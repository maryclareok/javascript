datime= new Date()
document.getElementById("datetime").innerHTML = datime
nextxmas = new Date( "2004 ,12 ,25")
nextxmas.setYear(datime.getFullYear())
msoneday = 1000*60*60*24
daysleft = (nextxmas.getTime() - datime.getTime())/msoneday
daysleft = Math.round(daysleft)
document.getElementById("newear").innerHTML = "Number of days left for the event is "+daysleft+" days!!!!"
