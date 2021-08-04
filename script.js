m=0;
var y;

function start()
{
	var y=setInterval(running,1000);

function running ()
{
   if (m==1200)
   {
   	clearInterval(y);
       m=0;
     }
     else
     {
     m+=5;
    var x= document.getElementById("img");
    x.style.marginLeft=m+'px';  
	}
  }
}
function stop()
{
	clearInterval(y);
}







