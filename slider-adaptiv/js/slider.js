console.log('hello world');


//кнопки controls
document.querySelector('.controls-tab').addEventListener('click', function(event) {
    if(document.querySelector('.slider-enable') != null){
        var slideOut = document.querySelector('.slider-enable');
        slideOut.classList.remove('slider-enable');
        slideOut.classList.add('slider-disable');
    }
    document.querySelector('#'+event.target.id.substring(4, event.target.id.length)).classList.remove('slider-disable');
    document.querySelector('#'+event.target.id.substring(4, event.target.id.length)).classList.add('slider-enable');
});

//кнопки стрелки controls-arrow
document.querySelector('.controls-arrow').addEventListener('click', function(event) {
    var id = +document.querySelector('.slider-enable').id.substring(6,document.querySelector('.slider-enable').id.length);
    var btnId = event.target.id;
    
    if(btnId=='slide-pre'){
        if(id == 0){
            id = document.querySelectorAll('.slider>.slides').length++;
        }
        if(document.querySelector('.slider-enable') != null){
            var sliderOut = document.querySelector('.slider-enable');
            sliderOut.classList.remove('slider-enable');
            sliderOut.classList.add('slider-disable');
        }
        document.querySelector('#slide-'+(id-1)).classList.remove('slider-disable');
        document.querySelector('#slide-'+(id-1)).classList.add('slider-enable');
    }else if(btnId=='slide-next'){
        if(id==document.querySelectorAll('.slider>.slides').length-1){
            id = -1;
        }
        if(document.querySelector('.slider-enable') != null){
            var sliderOut = document.querySelector('.slider-enable');
            sliderOut.classList.remove('slider-enable');
            sliderOut.classList.add('slider-disable');
        }
        document.querySelector('#slide-'+(id+1)).classList.remove('slider-disable');
        document.querySelector('#slide-'+(id+1)).classList.add('slider-enable');
    }
});

//тач
var initialPoint;
var finalPoint;
document.querySelector('.slider-wrapper').addEventListener('touchstart', function(Event){
    console.log('тач старт!');
    initialPoint = Event.changedTouches[0];
}, false);
document.querySelector('.slider-wrapper').addEventListener('touchend', function(event){
    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if(xAbs > 20 || yAbs > 20){
        if(xAbs > yAbs) {
            if (finalPoint.pageX < initialPoint.pageX){
                console.log('свайп влево');
            }else{
                console.log('свайп вправо');
            }
        }else{
            if(finalPoint.pageY < initialPoint.pageY){
                console.log('свайп вверх');
            }else{
                console.log('свайп вниз');
            }
        }
    }
}, false);

