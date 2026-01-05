
// registrando o plugin scrollTrigger para animações que acontecem quando o usuário faz o scroll do mouse
gsap.registerPlugin(ScrollTrigger)

// quando o conteúdo do site for carregado
document.addEventListener("DOMContentLoaded",()=>{
    // obtendo os links que estão no header para criar a animação da borda suave
    const headerLinks = document.querySelectorAll(".links-header");
    // animando link por link
    headerLinks.forEach(link => {
        let line = link.querySelector(".line-header");

        if(!line){
            line = document.createElement("div");
            line.className = 'line-header'
            link.appendChild(line);
        }

        // quando passar o mouse em cima do link ele vai fazer a animação
        link.addEventListener("mouseenter",()=>{
            gsap.to(line,{
                scaleX:1, //
                transformOrigin: "left",
                duration:0.4,
                ease:"power2.out",
                overwrite:"auto"
            })
        })


        // quando passar o mouse em cima do link ele vai fazer a animação
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