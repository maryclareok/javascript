const colors = ['green','blue','rgba(133,122,300)','#f124025'];
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener('click',function(){
    const randomnumber = getrndnum();
    // const randomnumber = 3;
    //  console.log (randomnumber)
    // console.log(document.body) //should print htmlin console
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber]
})
function getrndnum()
{
    return Math.floor(Math.random() * colors.length);
    //floor will round 3.5 to 3 rather than 4 , thats why we used it 
}