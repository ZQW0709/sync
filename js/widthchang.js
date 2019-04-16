var findDimensions = function() {
  var winWidth = 0;
  var winHeight = 0;
  //获取窗口宽度
  if (window.innerWidth)
  winWidth = window.innerWidth;
  else if ((document.body) && (document.body.clientWidth))
  winWidth = document.body.clientWidth;
  //获取窗口高度
  if (window.innerHeight)
  winHeight = window.innerHeight;
  else if ((document.body) && (document.body.clientHeight))
  winHeight = document.body.clientHeight;
  //通过深入Document内部对body进行检测，获取窗口大小
  if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
  {
  winHeight = document.documentElement.clientHeight;
  winWidth = document.documentElement.clientWidth;
  }
  //结果输出至两个文本框
  // document.form1.availHeight.value= winHeight;
  // document.form1.availWidth.value= winWidth;
  if(winWidth < 1010) {
    document.getElementById("ulclass").style.visibility="hidden";//隐藏
    document.getElementById("menu-icon").style.visibility="visible";//隐藏
  }
  else {
    console.log(winWidth)
    document.getElementById("ulclass").style.visibility="visible";//隐藏
    document.getElementById("menu-icon").style.visibility="hidden";//隐藏
  }

}
findDimensions();
//调用函数，获取数值
window.onresize=findDimensions;
