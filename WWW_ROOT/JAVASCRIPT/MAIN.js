/*
function show() {
    let div1 = document.querySelector('#MainContainer1');
    let div2 = document.querySelector('#MainContainer2');

    if (div1.style.display == "block") {
        div1.style.display = "none";
        div2.style.display = "block";
    } else {
        div1.style.display = "block";
        div2.style.display = "none";
    }

    if (div1.style.display == "block") {
        div1.style.display = "none";
        div2.style.display = "block";
    } else {
        div1.style.display = "block";
        div2.style.display = "none";
    }

  }
*/


function SwapDivsWithClick(MainContainer1,MainContainer2)
{
   d1 = document.getElementById(MainContainer1);
   d2 = document.getElementById(MainContainer2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}


