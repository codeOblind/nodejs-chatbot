

var sendButton = document.getElementById('sendButton');
var textbox=document.getElementById('userInput');
var chatContainer=document.getElementById('chatContainer');
var user={message:""};

var arrayofPossibleMessages = [
    {message:"Hello",response:"Hi there!"},
    {message:"Hi",response:"Hello!"},
    {message:"what is my name?",response:"BATMAN"},
    {message:"who is my son",response:"Harsh, Manvender,Hemang,satnam"},
    {message:"what is your name",response:"SAvAGE BOT"},
    {message:"what is your age",response:"Well not 18"},
    {message:"how are you",response:"I am good, how about you?"},
    {message:"what are you doing",response:"I am chatting with you"},   
    {message:"what is the time",response:"I am not a clock"},
    {message:"what is the date",response:"I am not a calendar"},
    {message:"what is the weather",response:"I am not a weather app"},
    {message:"what is the temperature   ",response:"I am not a weather app"},
    {message:"what is your fav food",reponse:"yous sisters ..."},

    
    
];



function sendMessage(userMessage){
    var messageElement=document.createElement('div');
    messageElement.style.textAlign="left";
    messageElement.style.margin="10px";
    messageElement.innerHTML="<span> You: </span>"+
    "<span>"+userMessage+"</span>";

    chatContainer.appendChild(messageElement);
   
}


function chatbotResponse(userMessage){
    var chatbotResponse="";
    if(userMessage.toLowerCase().includes("hello")){
        chatbotResponse="Hi there!";}
    else if(userMessage.length>5){
        var result=arrayofPossibleMessages.filter(val=>val.message.includes(userMessage.toLowerCase()));
        if(result.length>0){
            var response=result[0].response;
            chatbotResponse=response;

        }else{
            chatbotResponse="I am not sure what you are asking";
        }
    }
    else{}
    var messageElement=document.createElement('div');
    messageElement.style.textAlign="right";
    messageElement.style.margin="10px";
    messageElement.innerHTML="<span> Chatbot: </span>"+
    "<span>"+chatbotResponse+"</span>";
    
    setTimeout(function(){
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        messageElement.animate([{opacity:0.4},{opacity:1}],{duration:1000});
    },1000);
    //chatContainer.appendChild(messageElement);
}

sendButton.addEventListener('click', function(e) {
   var userMessage = textbox.value;

   if(userMessage==""){
       alert("Please enter a message");
       
   }else{
    let userMessageText = userMessage.trim();
    user.message=userMessageText;
    textbox.value="";
    sendMessage(userMessageText);
    chatbotResponse(userMessageText);
   }


});


