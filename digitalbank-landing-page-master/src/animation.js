
gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded",()=>{
    const headerLinks = document.querySelectorAll(".links-header");
    headerLinks.forEach(link => {
        let line = link.querySelector(".line-header");

        if(!line){
            line = document.createElement("div");
            line.className = 'line-header'
            link.appendChild(line);
        }

        // animação usando gsap
        link.addEventListener("mouseenter",()=>{
            gsap.to(line,{
                scaleX:1,
                transformOrigin: "left",
                duration:0.4,
                ease:"power2.out",
                overwrite:"auto"
            })
        })

        link.addEventListener("mouseleave",()=>{
            gsap.to(line,{
                scaleX:0,
                transformOrigin:"right",
                duration:0.3,
                ease:"power2.in",
                overwrite:"auto"
            })
        })

    })

    const itemAdvantages = document.querySelectorAll(".item-advantages");

    gsap.from(itemAdvantages, {
        duration:1,
        y:80,
        opacity:0,
        stagger:0.2,
        ease:"power2.out",
        scrollTrigger:{
            trigger:".advantages-list",
            start:"top 90%",
            toggleActions:"play none none none",
            scrub:true
        }
    });

})