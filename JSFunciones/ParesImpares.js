let numero;
par = (x) => (x%2 == 0) ? "par" : "impar";
for (let i = 0; i < 500; i++) {
    numero = Math.ceil(Math.random()*10000)+1;
    document.write(` <p> ${numero}\t${par(numero)} `);    
}