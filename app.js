document.addEventListener("DOMContentLoaded",function(){

    let button = document.querySelector("#button");

    button.addEventListener("onclick",function(element){

        element.preventDefault();

        fetch("http://localhost/comp2245-assignment4/superheroes.php")
            .then(response => response.text())
            .then(data => alert(data))   
            
             .catch (error =>console.log(error));    
                    
            });
            
    });

