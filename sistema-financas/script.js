const input = document.querySelector("body.page-product-single .product-info__form-input");

if(input){
    input.placeholder = "Digite o CEP"
}
//Invertendo ordem do vendido e entregue e tags 
const divInfoMkt = document.querySelector(".product-info__mkt");

if(window.innerWidth <= 767){
    if(divInfoMkt && document.querySelector(".product-info__flex-container")){
        const newDivInfoMkt = `<div class="product-info__mkt">${divInfoMkt.innerHTML}</div>` 
            divInfoMkt.style.display="none"
            document.querySelector(".product-info__flex-container").insertAdjacentHTML("beforebegin", newDivInfoMkt)
        }
}


//colocando preço antigo + desconto
setTimeout(() =>{
    let paragrafo = document.querySelector(".product-info__old-value")
    let conteudo = document.querySelector(".product-showcase__product-badge") //pego o elemento original
    var conteudoClone = conteudo.cloneNode(true);//clono o elemento original e crio um novo
    conteudoClone.style.position = "relative"
    
    paragrafo.appendChild(conteudoClone)//adiciono o novo onde quero que ele fique    
}, 500)


//Adicionando "Sem juros" e modificando texto da quantidade de parcelas
const valuesJuros = document.querySelectorAll(".product-info__installments")[0].children;
Array.from(valuesJuros).forEach((element,index) => {
	let text =  element.innerHTML;
    let resultado = text.replace("s/ juros", "<strong>sem juros</strong>");
    

    var n = resultado.search(/[x]/i);//retorna a posição do x

    let newText = resultado.split("")//transformo o texto em array 
    let newDesconto = "";//seto um acumulador
    
    for(let i = 0; i <= n; i++){
        newDesconto += newText[i] //creio onde vai ser em negrito 10x
    }
    
    
    let substituicao  = `<strong>${newDesconto}</strong> de`
    const cartao1 = `<img src="https://raw.githubusercontent.com/erosMariano/teste2/main/cartao-green-camicado.svg"> <strong>${newDesconto}</strong>`
    const cartao2 = `<img src="https://raw.githubusercontent.com/erosMariano/teste2/main/cartao-verde-riachuello.svg" alt=""> <strong>${newDesconto}</strong>`
    
    for(let i = 0; i <= n; i++){
        newText.shift()//removo os elementos até o X
    }
    
    if(index === 0){
        substituicao  = cartao1
    }else{
        substituicao  = cartao2
    }
    newText.unshift(substituicao)//adiciono o novo elemento 
    const novoTexto = newText.join("")

    element.innerHTML = novoTexto

});


//adicionando transação segura

const conteudoSeguranca = `<p class="text-seguranca"><img src="https://raw.githubusercontent.com/erosMariano/teste2/main/cadeado-seguro.png"> Transação segura</p>`


if(document.querySelectorAll("body.page-product-single .product-info__btn--one-click")[0]){
    document.querySelectorAll("body.page-product-single .product-info__btn--one-click")[0].insertAdjacentHTML("afterend",conteudoSeguranca)
}


const string = "qualquer coisa seguido de uma barra tem p seguido de outra depois qualquer"


