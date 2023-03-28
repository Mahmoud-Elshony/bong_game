let ball = document.querySelector('.ball');
let buddls=document.querySelectorAll('.budll');
let left = 50 ;
let dir = 1;
let game = setInterval(()=>{
    ball.style.left=`${left+= dir}vh`;
    buddls.forEach((ee)=>{
        col(ball,ee)?dir*=-1:1;
    })
},5)
function col(el1, el2) {
    // snake = document.querySelectorAll('.snake div');
    const a = el1.getBoundingClientRect();
    const b = el2.getBoundingClientRect();
    return (a.x < (b.x + b.width)) && ((a.x + a.width) > b.x) && (a.y < (b.y + b.height)) && ((a.y + a.height) > b.y);
}