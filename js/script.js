let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validnome=false;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validemail=false;

let tel= document.querySelector('#tel');
let labelTel = document.querySelector('#labelTel');
let validtel=false;

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

nome.addEventListener('keyup',()=>{
    if(nome.value.length <=2){
        labelNome.setAttribute('style','color:red');
        labelNome.innerHTML = '<strong> Nome *Insira no minímo 3 caracteres</strong>' 
        nome.setAttribute('style' , 'border-color:red')
    }else{
        labelNome.setAttribute('style','color:green');
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style' , 'border-color:green');
    }
})

function cadastrar() {
   listaClientes = JSON.parse(localStorage.getItem('listaClientes') || '[]')
   listaClientes.push(
       {
           nome:nome.value,
           tel:tel.value,
           email:email.value
       }
   )
   console.log(listaClientes);

   localStorage.setItem('listaClientes',JSON.stringify(listaClientes))
}

function cadastrarProduto() {
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
 }
