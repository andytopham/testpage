/*javascript for testpage */
function myFunction()
{
        myElement=document.getElementById("trial");
        myElement.innerHTML="Testing, testing, 1, 2, 3.";
        if(document.getElementById("smallbutton").checked){
                myElement.innerHTML="Testing, testing, 1, 2, 3. Going small.";
                myElement.style.fontSize="small";
        }
        if(document.getElementById("largebutton").checked){
                myElement.style.fontSize="large";
        }
               
}
