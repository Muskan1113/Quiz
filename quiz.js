//Following are the questions
const Questions=[{
    id: 1,
    q: "What is the capital of madhya pradesh?",
    a:[{Text:"Indore", iscorrect:false},
    {Text:"Bhopal", iscorrect:true},
    {Text:"Sea Hore", iscorrect:false},
    {Text:"Itarsi", iscorrect:false}]

},
{
    id: 2,
    q: "What is the capital of Gujarat?",
    a:[{Text:"Gandhi nagar", iscorrect:true},
    {Text:"Ahemdabad", iscorrect:false},
    {Text:"kutch", iscorrect:false},
    {Text:"allahabad", iscorrect:false}]

},
{
    id: 3,
    q: "What is the capital of Tamil Nadu?",
    a:[{Text:"Trinulveli", iscorrect:false},
    {Text:"Bhopal", iscorrect:false},
    {Text:"Chennai", iscorrect:true},
    {Text:"Tiruchirappali", iscorrect:false}]

},
{
    id: 4,
    q: "What is the capital of uttar pradesh?",
    a:[{Text:"Jhansi", iscorrect:false},
    {Text:"Lucknow", iscorrect:true},
    {Text:"Kanpur", iscorrect:false},
    {Text:"Agra", iscorrect:false}]

},
{
    id: 5,
    q: "What is the capital of Punjab?",
    a:[{Text:"amritsar", iscorrect:false},
    {Text:"patiala", iscorrect:false},
    {Text:"Ludhiana", iscorrect:false},
    {Text:"Chandigarh", iscorrect:true}]
}
]

//Now to start quiz as we have set up the questions
var start = true;

//iterate the function
function iterate(id)
{
    //display of result section
    var result = document.getElementsByClassName("Result");
    result[0].innertext = "";
    //display of question
    const Questions = document.getElementById(Questions);
    Questions.innerText = Question[id].q;

    //display of options
    const op1 =document.getElementById('op1');
    const op2 =document.getElementById('op2');
    const op3 =document.getElementById('op3');
    const op4 =document.getElementById('op4');

    //from where to choose opn
    op1.innerText = Questions[id].a[1].text;
    op2.innerText = Questions[id].a[2].text;
    op3.innerText = Questions[id].a[3].text;
    op4.innerText = Questions[id].a[4].text;

    //giving true and false value
    op1.value = Question[id].a[1].iscorrect;
    op2.value = Question[id].a[2].iscorrect;
    op3.value = Question[id].a[3].iscorrect;
    op4.value = Question[id].a[4].iscorrect;
}
var selected = "";
  
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })
  

    //Evaluation method
    const evaluate =document.getElementsByClassName("Evaluate");
    evaluate[0].addEventListener("click", () =>
    {
        if(selected == "true")
        {
            result[0].innerHTML = "True";
            result[0].style.color="green";
        }
            else
            {
                result[0].innerHTML="False";
                result[0].style.color="Red";
            }
    })
        
if (start) 
{iterate("0");
}

//next button
const next = document.getElementsByClassName('next')[0];
var id =0;

next.addEventListener("click", () => {
    start= false;
    if(id<2)
    {id++;
    iterate(id);
console.log(id);}
    })
