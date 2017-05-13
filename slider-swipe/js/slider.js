//кнопки сдвига

document.querySelector('main').addEventListener('click', function(event) {
	var btn = event.target.className;
	var speed = 10;	//скорость скрола.
	if(btn.includes('arrow-left')){
		var sliderW = event.target.parentElement.parentElement;
		var slider = sliderW.querySelector('.slider');
		var maxWidth = slider.offsetWidth;
		var i = (slider.querySelector('.slides').offsetWidth + 23)/speed; //кол-во повторений;
		var interval = setInterval( //задаём интервал
			function(){ //анонимная функция обёртка, вместо неё можно передавать функции по имени
				slider.scrollLeft -= speed; //исполняем нужный вам код
				if(--i <= 0) clearInterval( interval ); //если закончилось заданное кол-во повторений - сбрасываем интервал 
			},
			1000/60 //время повтора в мс (fps)
		);
	} else if(btn.includes('arrow-right')){
		var sliderW = event.target.parentElement.parentElement;
		var slider = sliderW.querySelector('.slider');
		var maxWidth = slider.offsetWidth;
		var i = (slider.querySelector('.slides').offsetWidth + 23)/speed; //кол-во повторений;
		var interval = setInterval( //задаём интервал
			function(){ //анонимная функция обёртка, вместо неё можно передавать функции по имени
				slider.scrollLeft += speed; //исполняем нужный вам код
				if(--i <= 0) clearInterval( interval ); //если закончилось заданное кол-во повторений - сбрасываем интервал 
			},
			1000/60 //время повтора в мс (fps)
		);
	};
});