window.sr = ScrollReveal();

    sr.reveal('.cabecera', {
     duration: 3000,
     origin: 'bottom', 
     distance: '-100px'
    });

    sr.reveal('.navElement1', {
        duration: 3000,
        origin: 'left', 
        distance: '-100px'
       });
    
    sr.reveal('.navElement2', {
        duration: 3000,
        origin: 'left', 
        distance: '100px'
       });

    sr.reveal('.logo', {
        rotate: {
            x: 1,
            y: 180
        }
       });

    sr.reveal('.heroCont', {
        duration: 3000,
        origin: 'left', 
        distance: '200px'
       });

   sr.reveal('.art1', {
        duration: 3000,
        origin: 'left', 
        distance: '200px'
       }); 
       
    sr.reveal('.art2', {
        duration: 2000,
        origin: 'left', 
        distance: '-200px'
       }); 

    sr.reveal('#sobreMi', {
        duration: 3000,
       }); 