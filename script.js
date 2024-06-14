const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.getElementsByClassName('control_prev')[0];
const next_btn = document.getElementsByClassName('control_next')[0];

let n = 0;

function changeSlide(){
    for(let i=0;i<imgs.length;i++)
    {
     imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

function ChangeOrder()
{
    console.log('called Change');
    if(n==5)
    n=0;
    else
    n++;
changeSlide();
}

function ChangeOrder1()
{
    console.log('called Change 1');
    if(n==0)
    n=imgs.length-1;
    else
     n--;
    changeSlide();
}

prev_btn.addEventListener('click',ChangeOrder1);
next_btn.addEventListener('click',ChangeOrder);


const scrollContainer = document.querySelectorAll('.products');

for (const item of scrollContainer)
{
item.addEventListener('wheel',(evt)=>
{
    evt.preventDefault();
    item.scrollLeft += evt.deltaY; 
});
}
