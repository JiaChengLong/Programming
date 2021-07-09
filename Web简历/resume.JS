//取得文本框的值
function getvalue(name) {
  var name = document.getElementById(name).value;
  alert(name);
}

//取得单选框的值
function oneselect(rname) {
  var ones = document.getElementsByName(rname);
  for (var i = 0; i < ones.length; i++) {
    if (ones[i].checked == true) {
      return ones[i].value;
    }
  }
}

//取得复选框的值
function getCheckbox(cbox) {
  var obj = document.getElementsByName(cbox);
  var objLen = obj.length;
  var i;
  var result = "";
  for (i = 0; i < objLen; i++) {
    if (obj[i].checked == true) {
      result += "," + obj[i].value;
    }
  }
  return result.substring(1);
}

//取得下拉框的值(单选)
function selectone(sname) {
  return document.getElementById(sname).value;
}


//取得下拉框的值(多选)
function selectmulti(sname) {
  var obj = document.getElementById(sname);
  var intvalue = "";
  for (i = 0; i < obj.length; i++) {
    if (obj.options[i].selected) {
      intvalue += "," + obj.options[i].value;
    }
  }
  return intvalue.substring(1);
}

//检查邮件格式
function checkemail(email) {
  var mail = document.getElementById(email);
  var index = mail.value.indexOf("@");
  var lastindex = mail.value.indexOf(".");
  if (index < 1 || lastindex < 2) {
    alert("邮件格式不正确");
    mail.focus();
    return false;
  }
  else {
    return true;
  }
}

//显示简历的XML并发送到IE浏览器
function displayxml() {
  //检查各个输入项的填写情况与格式
  if (checkemail("yx") == false) {

  }
  else {
    if (confirm("输出XML形式的简历信息到文件吗?") == true) {
      alert("姓名:  "+document.getElementById("xm").value+"\n"//姓名:
        + "性别:  " + oneselect("性别") + "\n"//性别
        + "政治面貌:  " + selectone("zzmm") + "\n"//政治面貌
        + "出生日期:  " + document.getElementById("BirthDate").value + "\n" //出生日期
        + "籍贯:  " + document.getElementById("jg").value + "\n"   //籍贯
        + "居住地址:  " + document.getElementById("jzdz").value + "\n"   //居住地址
        + "本科:  " + document.getElementById("bk").value + "      " //本科
        + "专业:  " + document.getElementById("zy").value + "\n" //专业
        + "工作/实习经历:  " + "\n" + document.getElementById("jl").value + "\n"//工作/实习经历
        + "获得荣誉/证书:  " + "\n" + document.getElementById("ry").value + "\n"//荣誉
        + "专业技能:  " + "\n" + document.getElementById("jn").value + "\n"//技能
        + "个人评价:  " + "\n"+ document.getElementById("pj").value + "\n"//评价
        + "手机:  " + document.getElementById("sj").value + "\n"//手机
        + "邮箱:  " + document.getElementById("yx").value);//邮箱
    }
  }
}

function xml() {
  alert("成功");
}
