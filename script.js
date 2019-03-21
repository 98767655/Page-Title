$(".name").click(function(){
var message = $("input").val();
 $(".lol").append(message);
});
$(".name2").click(function(){
var text = $(".ipt2").val();
 $(".lol2").append(text);
});
$(".name3").click(function(){
var messa = $(".ipt3").val();
var leo= parseInt(messa);
leo = leo*24;
 $(".lol3").append(leo);
});
