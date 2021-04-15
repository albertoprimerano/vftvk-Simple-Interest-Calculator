//Display the rate value next to the rate range 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

//Calculate the amount to be displayed and define the output message
function compute()
{
    //Get all the data required from document
    var principal = document.getElementById("principal").value;  
    //Returns an error if amount inserted is negative or not inserted
    if (parseFloat(principal) <= 0 || principal == ""){
        alert("Enter a positive number")
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        //Determine interest
        var interest = principal * years * rate /100;
        //Determine the correct year
        var year = new Date().getFullYear()+parseInt(years);
        //Calculate the amount (rounded to 2 decimal cyphers)
        var amount =  parseFloat(interest).toFixed(2)
        //Set the message to be displayed
        var p = document.getElementById("result")
        p.innerHTML = "If you deposit <mark>"  + principal +"</mark>,\<br/\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    }
}
        