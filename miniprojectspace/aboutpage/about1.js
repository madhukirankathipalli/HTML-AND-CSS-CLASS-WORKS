// counting script start 
    





const incrementToTarget = (element, target, intervalSpeed, incrementValue) => {
    const interval = setInterval(() => {
        let currentNumber = parseInt(element.textContent.replace('+', ''), 10);
        if (currentNumber < target) {
            element.textContent = `+${currentNumber + incrementValue}`;
        } else {
            element.textContent = `+${target}`; 
            clearInterval(interval);
        }
    }, intervalSpeed);
}

const startCountdowns = () => {
    const countdownElements = [
        { element: document.querySelector('#finpro .countdown h1'), target: 6890, speed: 21, increment: 50 },
        { element: document.querySelector('#newde .countdown h1'), target: 3045, speed: 20, increment: 33 },
        { element: document.querySelector('#temem .countdown h1'), target: 480, speed: 20, increment: 4 },
        { element: document.querySelector('#happycli .countdown h1'), target: 6050, speed: 22, increment: 40 }
    ];

    countdownElements.forEach(item => incrementToTarget(item.element, item.target, item.speed, item.increment));
};

const resetCountdowns = () => {
    document.querySelector('#finpro .countdown h1').textContent = '+0';
    document.querySelector('#newde .countdown h1').textContent = '+0';
    document.querySelector('#temem .countdown h1').textContent = '+0';
    document.querySelector('#happycli .countdown h1').textContent = '+0';
};

let resetTimeout;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCountdowns();
            clearTimeout(resetTimeout);
        } else {
            resetTimeout = setTimeout(() => {
                resetCountdowns();
            }, 60000); // 1 minute = 60000 milliseconds
        }
    });
}, { threshold: 0.1 });

observer.observe(document.querySelector('#cntparent'));



// counting script end 
    
    





// slick script start










$(document).ready(function(){
    $('.teammem').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 300,
        centerMode:true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});



















// slick script end 






















// djbjisdbsjdfnwd











 
    
    document.addEventListener('click', event => {
      bursty(event.pageX, event.pageY);
    });
    
    setInterval(() => randomizedConfetti(), 500);
    
    function bursty(x, y) {
      const burst = new mojs.Burst({
        left: 0,
        top: 0, 
        radius: { 0: 200 },
        count:   20,
        degree: 360,
        children: {
          fill: { 'white' : '#25D2FF' },
          duration:   2000
        }
      }).tune({
          x: x,
          y: y,
      });
      
      burst.replay();
    }
    
    function randomizedConfetti() {
      let randomX = Math.floor(Math.random() * (document.body.clientWidth - 100) + 0);
      let randomY = Math.floor(Math.random() * (window.innerHeight - 200) + 0);
        const burst = new mojs.Burst({
          left: 0,
          top: 0,
          radius: { 0: 200 },
          count:   20,
          degree: 360,
          children: {
            fill:       { 'white' : '#25D2FF' },
            duration:   2000
          }
        }).tune({
            x: randomX,
            y: randomY,
        });
    
        burst.replay();
      }
    
    
    Splitting();
    








    