

w = document.getElementById("insert");
h = document.querySelectorAll(".box");
p = ["x", "O"];
const win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
];
count = 0;
cou=0;
w.innerHTML = "O's its your turn";
h.forEach((i, index) => {
    i.addEventListener("click", (e) => {
        ++cou;
       
        
       
        j = e.target;
        j.style.color = "black";
        if (count % 2 == 0) {
            count++;
            w.innerHTML = `${p[count - 1]}s its your turn`;
        }
        else {
            count--;
            w.innerHTML = `${p[count + 1]}s its your turn`;
        }
        display(j);
        if(cou==9)
        {
        ze=document.querySelector(".h");
        ze.classList.add("active");
        y=document.querySelector("#re");
        y.innerHTML="THE GAME IS TIE";
  
        }

        checkwinner(index);
       

    }, { once: true });

});
function display() {


    j.innerHTML = p[count];
}
function checkwinner(j) {
    q = h[j].innerHTML;

    for (i = 0; i < win.length; i++) {
        coun = 0;

        for (j = 0; j < 3; j++) {

            z = win[i];
            z2 = z[j];
            if (h[z2].innerHTML == q) {
                coun++;
            }

        }



        if (coun == 3) {
            
            ze=document.querySelector(".h");
            ze.classList.add("active");
            y=document.querySelector("#re");
            y.innerHTML=`${q} is a winner`;

        }

    }







}


lo=document.getElementById("ree");
lo.addEventListener("click",()=>{
    
    setTimeout(() => {
        document.location.reload();
      }, 100);
})
