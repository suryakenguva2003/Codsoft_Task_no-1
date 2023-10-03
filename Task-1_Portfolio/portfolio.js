document.querySelector('.con')
.addEventListener('scroll',(e)=>{
    console.log(e);
}
)
function clicked(id, targetId, className)
{
    const a = document.getElementById(id);
    const b = document.getElementById(targetId);
    const c=document.getElementsByClassName(className);
    for (let i = 0; i < c.length; i++) {
        const element = c[i];
        if (element === a) {
            element.classList.add("white");
        }
        else {
            element.classList.remove("white");
        }
    }
    b.scrollIntoView({ behavior: "smooth" });
}