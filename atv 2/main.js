const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {

    const título = frm.inTitulo.value;
    const duração = Number(frm.inDuracao.value);
    
    const horas = Math.floor(duração / 60)
    const minutos = duração % 60

    resp1.innerText = título
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;
    
    e.preventDefault();
    })