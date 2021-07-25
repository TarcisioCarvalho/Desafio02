
// Cliente
let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validnome=false;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validemail=false;

let tel= document.querySelector('#tel');
let labelTel = document.querySelector('#labelTel');
let validtel=false;

// Endereço

let estado = document.querySelector('#estado');
let labelEstado = document.querySelector('#labelEstado');
let validestado=false;

let cidade = document.querySelector('#cidade');
let labelCidade = document.querySelector('#labelCidade');
let validcidade=false;

let rua = document.querySelector('#rua');
let labelRua = document.querySelector('#labelRua');
let validrua=false;

let bairro = document.querySelector('#bairro');
let labelBairro = document.querySelector('#labelBairro');
let validbairro=false;

let cep = document.querySelector('#cep');
let labelCep = document.querySelector('#labelCep');
let validcep=false;

let numero = document.querySelector('#numero');
let labelNumero = document.querySelector('#labelNumero');
let validnumero=false;









//Produto
let nomeProd = document.querySelector('#nomeProd');
let labelNomeProd = document.querySelector('#labelNomeProd');
let validnomeProd=false;

let preco = document.querySelector('#preco');
let labelPreco = document.querySelector('#labelPreco');
let validpreco=false;

let tipo = document.querySelector('#tipo');
let labelTipo= document.querySelector('#labelTipo');
let validtipo=false;

let quantidade = document.querySelector('#quantidade');
let labelQuantidade = document.querySelector('#labelQuantidade');
let validquantidade=false;

/*nome.addEventListener('keyup',()=>{
    if(nome.value.length <=2){
        labelNome.setAttribute('style','color:red');
        labelNome.innerHTML = '<strong> Nome *Insira no minímo 3 caracteres</strong>' 
        nome.setAttribute('style' , 'border-color:red')
    }else{
        labelNome.setAttribute('style','color:green');
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style' , 'border-color:green');
    }
})*/


nome.addEventListener('keyup',()=>{
    nome.value? validnome = true : validnome = false;
});

email.addEventListener('keyup',()=>{
    email.value? validemail = true : validemail = false;
});
tel.addEventListener('keyup',()=>{
    tel.value? validtel = true : validtel = false;
});

cidade.addEventListener('keyup',()=>{
    cidade.value? validcidade = true : validcidade = false;
});
estado.addEventListener('keyup',()=>{
    estado.value? validestado = true : validestado = false;
});
rua.addEventListener('keyup',()=>{
    rua.value? validrua = true : validrua = false;
});
cep.addEventListener('keyup',()=>{
    cep.value? validcep = true : validcep = false;
});
numero.addEventListener('keyup',()=>{
    numero.value? validnumero = true : validnumero = false;
});
bairro.addEventListener('keyup',()=>{
    bairro.value? validbairro = true : validbairro= false;
});


nomeProd.addEventListener('keyup',()=>{
    nomeProd.value? validnomeProd = true : validnomeProd = false;
});
preco.addEventListener('keyup',()=>{
    preco.value? validpreco = true : validpreco = false;
});
tipo.addEventListener('keyup',()=>{
    tipo.value? validtipo = true : validtipo = false;
});
quantidade.addEventListener('keyup',()=>{
    quantidade.value? validquantidade = true : validquantidade= false;
});



function cadastrar() {
    if(validnome && validtel && validemail && validestado && validcidade && validnumero && validrua 
        && validbairro && validcep){
   listaClientes = JSON.parse(localStorage.getItem('listaClientes') || '[]')
   listaClientes.push(
       {
           nome:nome.value,
           tel:tel.value,
           email:email.value,
           estado:estado.value,
           cidade:cidade.value,
           bairro:bairro.value,
           rua:rua.value,
           cep:cep.value,
           numero:numero.value,
       }
   )
   console.log(listaClientes);

   localStorage.setItem('listaClientes',JSON.stringify(listaClientes))
}else{
    alert('Preencha todos os espaços');
}
}

function cadastrarProduto() {
    if(validnomeProd && validpreco && validtipo && validquantidade){
    listaProdutos = JSON.parse(localStorage.getItem('listaProdutos') || '[]')
    listaProdutos.push(
        {
            nomeProd:nomeProd.value,
            preco:preco.value,
            tipo:tipo.value,
            quantidade:quantidade.value
        }
    )
 
    localStorage.setItem('listaProdutos',JSON.stringify(listaProdutos))
}else{
    alert('Preencha todos os espaços');
}
 }
