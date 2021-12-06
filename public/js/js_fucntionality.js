   function addItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

console.log(li);

function addItem2(){
    var ul = document.getElementById("dynamic-list");
    var candidate2 = document.getElementById("candidate2");
    var span = document.createElement("span");
    span.setAttribute('id',candidate2.value);
    span.appendChild(document.createTextNode(candidate2.value));
    ul.appendChild(span);
}


function addComment() {
    element = document.querySelector('#comments');
    element.style.visibility = 'visible';
}

function hideComment() {
    element = document.querySelector('#comments');
    element.style.visibility = 'hidden';
}

function clearText()  
{
    document.getElementById('candidate').value = "";
} 

function addReply() {
    element = document.querySelector('#replybutton');
    element.style.visibility = 'visible';
}

function hideReply() {
    element = document.querySelector('#replybutton');
    element.style.visibility = 'hidden';
}

function clearText2()  
{
    document.getElementById('candidate2').value = "";
} 

function addReplySection() {
    element = document.querySelector('#reply');
    element.style.visibility = 'visible';
}

function hideReplySection() {
    element = document.querySelector('#reply');
    element.style.visibility = 'hidden';
}

function clearText()  
{
    document.getElementById('candidate').value = "";
} 