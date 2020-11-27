class Produto {
    constructor() {
        this.produtos= localStorage.getItem('tbProdutos') === null
        ? []
        : JSON.parse(localStorage.getItem('tbProdutos'))
    }

    salva(produto){

        if(document.getElementById('codigo').getAttribute('disabled')==='disabled'){
            this.apaga(produto.codigo)
        }
        this.produtos.push(produto) //adiciona um novo elemento ao array
        localStorage.setItem('tbProdutos', JSON.stringify(this.produtos))
        
    }

    apaga(codigo){
        let index = this.produtos.findIndex( produto => produto.codigo == codigo)
        this.produtos.splice(index, 1) //index é o elemento do array
        //salvamos a alteração
        localStorage.setItem('tbProdutos',JSON.stringify(this.produtos))
        produto.atualiza()
    }
    edita(produto) {
        document.getElementById('codigo').setAttribute('disabled','disabled')
         document.getElementById('codigo').value
         document.getElementById('nome').value
        document.getElementById('precocusto').value
        document.getElementById('lucro').value
        document.getElementById('precodevenda').value
         document.getElementById('icms').value
         document.getElementById('notafiscla').value
        document.getElementById('marca').value
       document.getElementById('categoria').value
        document.getElementById('origem').value
        document.getElementById('ncodigodebarras').value
    
    }

    lista(){
        const listagem = this.produtos.map((produto) => (
            `<tr>
            <td>${produto.codigo}</td>
            <td>${produto.nome}</td>
            <td>${produto.precocusto}</td>
            <td>${produto.lucro}</td>
            <td>${produto.precodevenda}</td>
            <td>${produto.icms}</td>
            <td>${produto.notafiscal}</td>
            <td>${produto.codigodebarras}</td>
            <td>
                <button id='apagar' onClick='produto.apaga(${produto.codigo})'>
                🗑️Apagar</button>
                <button id='editar' onClick='produto.edita(${JSON.stringify(produto)})'>
                ✏️Editar</button>
            </td>
            </tr>
            `
        ))
        return (`<table border='1' id="table">
        <caption id="caption2"><strong> Produtos Cadastrado</strong></caption>
           <th>Código</th>  
            <th>Nome</th>  
            <th>PC: Preço de custo</th>  
            <th>PL: Preço de Lucro </th> 
            <th>Preço de venda </th>
            <th>ICMS</th>
            <th>NOTA FISCAL</th>
            <th>Código de Barras</th>
            <th>Opções</th>
        
        <tbody id="tbody">${listagem}</tbody>      
        </table>
        `)
    }

    atualiza(){
        document.getElementById('listagem').innerHTML = produto.lista()
    }
}
//instanciamos um novo objeto
const produto  = new Produto()
//tratamos o botão salvar
document.getElementById('salvar').onclick = function ()  {
    const registro = {
        codigo:document.getElementById('codigo').value,
        nome:document.getElementById('nome').value,
       precocusto:document.getElementById('precocusto').value,
       lucro:document.getElementById('lucro').value,
       precodevenda:document.getElementById('precodevenda').value,
        icms:document.getElementById('icms').value,
        notafiscal:document.getElementById('notafiscal').value,
       marca:document.getElementById('marca').value,
      categoria:document.getElementById('categoria').value,
       origem:document.getElementById('origem').value,
       codigodebarras:document.getElementById('codigodebarras').value
    } 
    produto.salva(registro)
}
//tratamos a listagem
window.onload = function(){
    produto.atualiza()
}


