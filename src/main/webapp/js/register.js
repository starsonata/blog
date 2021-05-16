
/*function uRegister(){

    $(".userNameMessage").html("");
    $(".emailMessage").html("");
    $(".passWordMessage").html("");
    $(".qpMessage").html("");
    $(".phoneMessage").html("");

    var userName = $("#userName").val();
    var email = $("#email").val();
    var passWord = $("#passWord").val();
    var qpassWord = $("#qpassWord").val();
    var phone = $("#phone").val();

    if(userName == ""){
        $(".userNameMessage").html("请输入用户名!");
    }else if(email == ""){
        $(".emailMessage").html("请输入邮箱!");
    }else if(passWord == ""){
        $(".passWordMessage").html("请输入密码!");
    }else if(qpassWord==""){
        $(".qpMessage").html("请再次输入密码!");
    }
    else if(passWord !=qpassWord ){
        $(".qpMessage").html("密码填写不一致!");
    }else if(phone == ""){
        $(".phoneMessage").html("请输入手机号!");
    }else{
        $.ajax({
            type:"post",
            dataType:"json",
            data:{"userName":userName,"email":email,"passWord":passWord,"phone":phone},
            url:"http://localhost:8081/blog/user/addUser",
            async:true,
            success:function (data) {
                alert(data.message);
            },
            error:function () {
                alert("服务器异常!");
            }
        })
    }

}*/
var zUserName = /^[a-z0-9_-]{3,16}$/;
var zPassWord = /^[a-z0-9_-]{6,18}$/;
var zEamil = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var zPhone = /^1[3|4|5|7|8][0-9]{9}$/;

$("#userName").blur(function () {
    var userName = $("#userName").val();
    alert(userName);
    if(userName ==null || userName == ""){
        $(".userNameMessage").html("用户名不能为空!")
    }else {
        $.ajax({
            type: "get",
            dataType: "json",
            data: userName,
            url: "http://localhost:8081/blog/user/findRepeUserName?userName=" + userName,
            async: true,
            success: function (data) {
                $(".userNameMessage").html(data.message);
            }
        })
    }
})

$(".uRegister").click(function() {
    alert(11);
    $(".userNameMessage").html("");
    $(".emailMessage").html("");
    $(".passWordMessage").html("");
    $(".qpMessage").html("");
    $(".phoneMessage").html("");

    var userName = $("#userName").val();
    var email = $("#email").val();
    var passWord = $("#passWord").val();
    var qpassWord = $("#qpassWord").val();
    var phone = $("#phone").val();

    if(userName == ""){
        $(".userNameMessage").html("请输入用户名!");
        return false;
    }
    if(!zUserName.test(userName)){
        $(".userNameMessage").html("请输入正确的用户名!");
        return false;
    }
    if(email == ""){
        $(".emailMessage").html("请输入邮箱!");
        return false;
    }
    if(!zEamil.test(email)){
        $(".emailMessage").html("请输入正确的邮箱!");
        return false;
    }
    if(passWord == ""){
        $(".passWordMessage").html("请输入密码!");
        return false;
    }
    if(!zPassWord.test(passWord)){
        $(".passWordMessage").html("请输入大于6位数的密码!");
        return false;
    }
    if(qpassWord == ""){
        $(".qpMessage").html("请再次输入密码!");
        return false;
    }
    if(passWord !=qpassWord ){
        $(".qpMessage").html("密码填写不一致!");
        return false;
    }
    if(phone == ""){
        $(".phoneMessage").html("请输入手机号!");
        return false;
    }
    if(!zPhone.test(phone)){
        $(".phoneMessage").html("请输入正确的手机号码!");
        return false;
    }
    $.ajax({
        type:"post",
        dataType:"json",
        contentType: "application/json;charset=utf-8",
        data:JSON.stringify({"userName":userName,"email":email,"passWord":passWord,"phone":phone}),
        url:"http://localhost:8081/blog/user/addUser",
        async:true,
        success:function (data) {
            alert(data.message);
            window.location.replace("http://localhost:8081/blog");
        },
        error:function () {
            alert("服务器异常!");
        }
    })
})
