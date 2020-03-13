/**
 * CASO 1 LOS 4 ATLETAS
 * 
 * De cuatro corredores se sabe que C ha llegado inmediatamente detras de B
 * y D ha llegado en medio de A Y C. Calcula el orden de llegada
 * 
 * 
 * B
 * C
 * D
 * A
 */

 var a = {
     A:0,
     B:0,
     C:0,
     D:0,
     resultado: function() {
         if(a.C > a.B && a.D > a.B && a.D < a.A) {
             return true;
         }

         return false;
     },

     intervalo: setInterval(() => {

        a.A = Math.ceil(Math.random()* 4)
        a.B = Math.ceil(Math.random()* 4)
        a.C = Math.ceil(Math.random()* 4)
        a.D = Math.ceil(Math.random()* 4)

         if(a.resultado() )
            clearInterval(a.intervalo);
            console.log(`Atleta A: ${a.A}`);
            console.log(`Atleta B: ${a.B}`);
            console.log(`Atleta C: ${a.C}`);
            console.log(`Atleta D: ${a.D}`);
     }, 10)
 }