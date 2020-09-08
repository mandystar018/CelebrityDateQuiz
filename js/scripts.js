$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    const userName = $("input#name").val();
    const gender = $("select#gender").val();
    const userInput1 = parseInt($("input:radio[name=question1]:checked").val());
    const userInput2 = parseInt($("input:radio[name=question2]:checked").val());
    const userInput3 = parseInt($("input:radio[name=question3]:checked").val());
    const userInput4 = parseInt($("input:radio[name=question4]:checked").val());
    const userInput5 = parseInt($("input:radio[name=question5]:checked").val());
    const userInput6 = parseInt($("input:radio[name=question6]:checked").val());
    const userInput7 = parseInt($("input:radio[name=question7]:checked").val());
    const userInput8 = parseInt($("input:radio[name=question8]:checked").val());
    const userInput9 = parseInt($("input:radio[name=question9]:checked").val());
    const userInput10 = parseInt($("input:radio[name=question10]:checked").val());
    const userTotal = userInput1 + userInput2 + userInput3 + userInput4 + userInput5 + userInput6 + userInput7 + userInput8 + userInput9 + userInput10;

    $("#results").text( `${userName} your celebrity match is!`);

      if (userTotal <= 10 && gender === "Female"){
        $("#zoe").slideDown();
      } else if (userTotal <= 10 && gender === "Male"){
        $("#bradley").slideDown();
      } else if (userTotal <= 20 && gender === "Female"){
        $("#rachael").slideDown();
      } else if (userTotal <= 20 && gender === "Male"){
        $("#ryan").slideDown();
      } else if (userTotal <= 30 && gender === "Female"){
        $("#jenny").slideDown();
      } else if (userTotal <= 30 && gender === "Male"){
        $("#liam").slideDown();
      } else if (userTotal <= 40 && gender === "Female"){
        $("#mila").slideDown();
      } else if (userTotal <= 40 && gender === "Male"){
        $("#andy").slideDown();
      } else if (userTotal <= 50 && gender === "Female"){
        $("#emma").slideDown();
      } else if (userTotal <= 50 && gender === "Male"){
        $("#will").slideDown();
      }
  });
});