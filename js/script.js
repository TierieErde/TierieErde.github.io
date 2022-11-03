// window.addEventListener('DOMContentLoader', () => {

// })

const burger = document.querySelector('.header__burger'),
    menu = document.querySelector('.menu'),
    closeEl = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay');
    nonselectable = document.querySelector('.header .promo .menu .info ');
    educationTitle = document.querySelector('.info__exp__educations');
    education = document.querySelector('.info__exp__RGRTU');
    let intervalId;

burger.addEventListener('click', () => {
    menu.classList.add('active');
	document.body.style.overflow="hidden";
});
closeEl .addEventListener('click', () => {
    menu.classList.remove('active');
	document.body.style.overflow="";
});
overlay .addEventListener('click', () => {
    menu.classList.remove('active');
	document.body.style.overflow="";
});
burger.addEventListener('click', () => {
    burger.classList.add('active');
});
closeEl .addEventListener('click', () => {
    burger.classList.remove('active');
});
overlay .addEventListener('click', () => {
    burger.classList.remove('active');
});


//dropdowns
document.querySelectorAll('.info__exp__educations').forEach(c => {
    c.addEventListener('click', c => {
        const dropdown = c.currentTarget.dataset.path;
        document.querySelectorAll('.info__exp__descr',).forEach(c => {
            if (!document.querySelector(`[data-target=${dropdown}]`).classList.contains('open')) {
                document.querySelector(`[data-target=${dropdown}]`).classList.add('active');
				// divider.classList.add('active')
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${dropdown}]`).classList.add('open');
                }, 0);
            }
            if (document.querySelector(`[data-target=${dropdown}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${dropdown}]`).classList.remove('active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${dropdown}]`).classList.remove('open');
                }, 0);
            }
        });
    });
});
//selec text
const disableselect = (e) => {  
    return false  
  }  
  document.onselectstart = disableselect  
//   document.onmousedown = disableselect






//tooltips

let setUpToolTip = function() {
	let tooltip = "",
		toolTipDiv=document.querySelector(".info__tooltip"),
		toolTipElements = Array.from(document.querySelectorAll(".hover-reveal")),
		timer;


	let displayTooltip = function(e) {
		tooltip = this.dataset.tooltip;
		toolTipDiv.innerHTML = tooltip;
		toolTipDiv.style.top = e.pageY +20 +"px";
		toolTipDiv.style.left = e.pageX +20 + "px";
		// toolTipDiv.style.opacity=1;
		fadeIn(toolTipDiv);
	};	
	// let element = null;
	// console.log(element);
let fadeOut = function(element) {
	let opac = 1;
	if(!timer) {
		 timer = setInterval(function() {
			if(opac >= 0.1) {
				clearInterval(timer);
				timer = null;
				element.style.opacity=0;
				element.style.display='none';
				return;
			}
			element.style.opacity=opac;
			opac -= 0.1;	
		}, 10);
	}
};
//затухание
let fadeIn = function(element) { 
	var opac = 0.1;
	element.style.display='inline-block';
	var timer = setInterval(function() {
		if(opac >= 1) {
			clearInterval (timer);	
		}
		element.style.opacity=opac;
		opac += opac * 0.1;	
	}, 10);
};

let BilndEvents = function(elem)
{
	let timeout;
		elem.addEventListener("mouseenter", function(e) {
			timeout = setTimeout(function(){
				displayTooltip.call(elem, e);
			}, 400);
		});
		elem.addEventListener("mouseleave", function(e) {
			clearTimeout(timeout);
			fadeOut(toolTipDiv);
		});	
	};	

	toolTipElements.forEach(BilndEvents); 
	
};
setUpToolTip();
