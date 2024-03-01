const searchEl=document.querySelector('.search');
const searchInputEl=searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

const badgeEl =document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){ //배지 숨기기
    if(window.scrollY>500){
        gsap.to(badgeEl,.6,{ //gsap cdn 페이지에서 가져옴
            opacity:0,
            display:'none'
        });
    }else{
        gsap.to(badgeEl, .6,{
            opacity:1,
            display:'block'
        });
    }
},300));
// _.throttle(함수, 시간)