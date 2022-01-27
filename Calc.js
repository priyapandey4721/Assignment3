var input_box = document.getElementById("Calc"); //For accessing input
var historyData=[]; //creating object to store array
var expressionData=""; // creating an expression data
var resultData=""; //creating result data

function UserClickButton(input){ //for taking Button input
    var oldinput=input_box.value; // accessing the old value from input box
    var newinput=oldinput+""+input; // one input concatinate with other input
    expressionData=newinput; // store the value in expression data 
    input_box.value=newinput; // storing the value in input box
}
function CalculateValue(){ //for calculating result
    console.log("Click"); //for checking purpose
    var input=input_box.value; // storinf value in input
    var result=eval(input); //eval function will execute all expressions
    resultData=result;// storeing result
    historyData.push({"expression": expressionData,"result":resultData}); // showing expression data and result
    showLogdata(); //calling function
    resultData=""; //after clicking equals to showing it empty
    expressionData=""; 
    input_box.value=result; //for showing result

}
function ClearData(){ //for AC clear everything present in input box
    input_box.value=""; //none
}
function showLogdata(){ //for historydata
    var log=document.getElementById("history_log"); // passing id to get data
    var string=""; 
    for(var key in historyData){ // for loop 
        string+=""+historyData[key]["expression"]+"="+historyData[key]["result"]+"<br>";
    }
    log.innerHTML=string; //for showing historydata
}