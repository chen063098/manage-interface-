var num = Number(prompt("请输入"));
var count = 0;
for(var i=1;i<num;i++){
    if(num%i==0){
        count++;
        break;
    }
}
if(count==2){
    document.write("素数");
}else{
    document.write(“非素数”);
}