/**
 * FALSY
 * 
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */
console.log("--------------------------------")
console.log("FALSY")
console.log("--------------------------------")
console.log("OBS: Em JS sempre retorna o valor mesmo do 'FALSY' e não verifica os proximos em &&  ")
console.log("Exemplo")
console.log("Marcelo" && undefined && "Rodrigues")
console.log("--------------------------------")

function falaOi() {
  return "Oi";
}

let executar;

console.log("Ex:", executar && falaOi())
console.log("--------------------------------")

function falaOiMesmo() {
  return "Oi";
}

let executarMesmo = "Marcelo";

console.log("Ex:", executarMesmo && falaOiMesmo())
console.log("--------------------------------")


console.log("Qual desses valor vai aparecer?")
console.log( 0 || false || null || "Marcelo" || true )
console.log("--------------------------------")

const corUsuario = null;
const corPadrao = corUsuario || "preto"
console.log(corPadrao)
console.log("--------------------------------")

const corUsuario2 = "Vermelho";
const corPadrao2 = corUsuario2 || "preto"
console.log(corPadrao2)
console.log("--------------------------------")

const a = 0;
const b = null;
const c = 'false';
const d = undefined;
const e = NaN;
console.log("Qual desses valor vai aparecer?")
console.log(a || b || c || d || e)
console.log("--------------------------------")

const aa = 0;
const bb = null;
const cc = false;
const dd = undefined;
const ee = NaN;
console.log("Qual desses valor vai aparecer?")
console.log(aa || bb || cc || dd || ee)
console.log("OBS: Sempre vai retrn o ultimo valor mesmo de FALSY")
console.log("--------------------------------")