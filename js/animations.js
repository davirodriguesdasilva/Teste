

// START ANIMATIONS

var timeline = gsap.timeline({paused: true})

timeline
.addLabel("start")
.to('.navbar .logo-container, .navbar .logo-anima', .7, {x: 0, ease: "power3.inOut"}, 'start+=' + .1)

.to('.nav-link', .7, {opacity: 1, ease: "power3.inOut", stagger: .1}, 'start+=' + .2)

.to('.bgs-anima', .7, {opacity: 1, ease: "power3.inOut", stagger: .3}, 'start+=' + .2)







timeline.play();
// SCROLL ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

gsap.to('.bloco-2 .elements-container',{
    scrollTrigger:{
        trigger:('.bloco-2 .elements-container'),
        start: '20px 65%',
        end: '+=620',
        toggleActions: 'play nome play nome',
        markers: false
    },
    opacity: 1,x: "0%", stagger: .5, duration: 1, ease: "power2.out"
})


gsap.to('.bloco-3 .elements-container',{
    scrollTrigger:{
        trigger:('.bloco-3'),
        start: '20px 65%',
        end: '+=1300',
        toggleActions: 'play nome play nome',
        markers: false
    },
    opacity: 1,x: "0%", stagger: .4, duration: 1, ease: "power2.out"
})

gsap.to('.bloco-4 .news-anima',{
    scrollTrigger:{
        trigger:('.bloco-4'),
        start: '20px 65%',
        end: '+=600',
        toggleActions: 'play nome play nome',
        markers: false
    },
    opacity: 1,x: "0%", stagger: .2, duration: 1, ease: "power2.out"
})