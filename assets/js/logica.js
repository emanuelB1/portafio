gsap.registerPlugin(ScrollTrigger); 

gsap.defaults({ ease: "none", duration: 2, });

const tiempo = gsap.timeline(); 

tiempo.from(".seccion_2", {xPercent: -100});
tiempo.from(".seccion_3", {xPercent: 100});
tiempo.from(".seccion_4", {yPercent: 100});

ScrollTrigger.create({
    animation: tiempo,
    trigger: ".contenedor_animacion",
    start: "top top",
    end: "+=4000",
    pin: true,
    scrub: true
});
TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -300,
    ease: Expo.easeInOut
})
TweenMax.to(".overlay span", 2, {
    delay: 1,
    opacity: 0,
    y: -300,
    ease: Expo.easeInOut
})
TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-10000",
    ease: Expo.easeInOut
})
TweenMax.from(".ellipse-container", 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".yellow", 1, {
    delay: 3.5,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".logo", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom(".menu-links ul li", 1, {
    delay: 3.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
}, 0.08)
TweenMax.from(".scrolldown", 1, {
    delay: 3.4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
})
TweenMax.from(".text .title", 1, {
    delay: 3,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
})
TweenMax.from(".text p", 1, {
    delay: 3,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
})
TweenMax.from(".contacto", 1, {
    delay: 3,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom(".media ul li", 1, {
    delay: 3.2,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
}, 0.08)

var imgs = [
    "assets/img/frelancer.png",
    "assets/img/blog.png",
    "assets/img/tienda.png",
    "assets/img/festival.png",
    "assets/img/frelancerb.png",
    "assets/img/pub.png"
],
n = imgs.length, 
current = n-1,
closedWidth = Math.floor(window.innerWidth/10)
//Creando Bucle de imagenes 
for (var i=0; i<n; i++){
    var bgImg = document.createElement("article");
    bg.appendChild(bgImg);
    gsap.set(bgImg, {
        attr:{id: "bgImg" + i, class: "bgImg"},
        width: "100%",
        height: "100%",
        backgroundImage: "url("+imgs[i]+")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        

    })
    // Creando un Acordion
    var b = document.createElement("article");
    fg.appendChild(b);
    gsap.fromTo(b, {
        attr:{id:"b"+i, class: "box" },
        innerHTML: "<h6><sub>Visistar</sub>" + (i + 1) + "</h6>",
        with: "100%",
        height: "100%",
        borderLeft: (i>0)?"solid 1px #eee":"",
        backgroundColor: "rgba(250, 250, 250, 0)",
        left: i*closedWidth,
        transformOrigin: "100% 100%",
        x:"100%",


    },{
        duration: i*0.15,
        x:0,
        ease: "expo.inOut"
    })
    // Estableciendo un target con House Over
    b.onmouseenter = b.onclick = (e)=>{
        if ( Number(e.currentTarget.id.substr(1)) == current) return;
        var staggerOrder = !!(current < Number(e.currentTarget.id.substr(1)));
        current = Number(e.currentTarget.id.substr(1));
        gsap.to(".box", {
            duration:0.5,
            ease: "elastic.out(0.3)",
            left:(i)=>(i<=current)? i*closedWidth: window.innerWidth-((n-i)*closedWidth),
            x: 0,
            stagger: staggerOrder? 0.05:-0.05
        })

    // Transicion animacion
    bg.appendChild(document.getElementById("bgImg"+ current))
    gsap.fromTo("#bgImg"+current, {opacity: 0}, {opacity:1, duration:0.3, ease: "power1.inOut"})
    gsap.fromTo("#bgImg"+ current, {scale:1.05, rotation:0.05}, {scale:1, rotation:0, duration: 1.5, ease: "sine"})

    }
   
}
 // Responsive
    window.onresize = (e)=> {
        closedWidth = Math.floor(window.innerWidth/10)
        gsap.set(".box", {x:0, left:(i)=> (i<=current)? i*closedWidth: window.innerWidth-((n-i)*closedWidth) })
    }

// Redireccionar

$(document).ready(function(){ 
    $("#b0").click(function () {
        url = "https://emanuelb1.github.io/freelancer1/";
        window.open(url, '_blank');
        return false;
    
    })
    $("#b1").click(function () {
        url = "https://emanuelb1.github.io/blog_de_cafe/";
        window.open(url, '_blank');
        return false;
    
    })
    $("#b2").click(function () {
        url = "https://emanuelb1.github.io/tienda/";
        window.open(url, '_blank');
        return false;
    
    })
    $("#b3").click(function () {
        url = "https://emanuelb1.github.io/festiva/";
        window.open(url, '_blank');
        return false;
    
    })
    $("#b4").click(function () {
        url = "https://emanuelb1.github.io/freelancer2/";
        window.open(url, '_blank');
        return false;
    
    })
    $("#b5").click(function () {
        url = "https://emanuelb1.github.io/emanuel_bustos_pub_restaurant/";
        window.open(url, '_blank');
        return false;
    
    })
    $(".fa-instagram").click(function () {
        url = "https://www.instagram.com/emanuelb54/";
        window.open(url, '_blank');
        return false;
    
    })
    $(".fa-github").click(function () {
        url = "https://github.com/emanuelB1";
        window.open(url, '_blank');
        return false;
    
    })
    $(".alerta").click(function () {
        alert("Usa el scroll :)")
    })
    
    
         
    

})

