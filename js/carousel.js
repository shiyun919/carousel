//点击无限张图片进行轮播

var allButtons = $('#buttons > span')

for(let i=0; i<allButtons.length; i++){
  $(allButtons[i]).on('click', function(x){
    //console.log('hi')
    //x.currentTarget 获取到当前点击的按钮
    var index = $(x.currentTarget).index() //用jQuery方法获取到当前点击的按钮在所有按钮中排行第几
    //console.log(index)
    $('#images').css({
      transform:'translateX('+ index * -710 +'px)'
    })
    n = index
    activeButton(allButtons.eq(n))
  })
}



//自动播放轮播
var n = 0;
var size = allButtons.length
//allButtons.eq(n%size) 获取到第0,1,2按钮，用余数获取
  playSlide(n%size)
  
function setTime(){
    setInterval(()=>{
    n += 1 
    playSlide(n%size)
  },2000)   //延时2s播放下一个按钮的轮播
}

var timeId = setTime()

function playSlide(index){
  allButtons.eq(index).trigger('click')
  activeButton(allButtons.eq(index))
}

function activeButton($button){
  $button
    .addClass('btn-on')
    .siblings('.btn-on')
    .removeClass('btn-on')
}


//鼠标移入轮播窗口图片悬停(就是清除间隔播放效果)
$('.window').on('mouseenter', function() {
  window.clearInterval(timeId)
})

$('.window').on('mouseleave', function() {
    timeId = setTime()
})


















