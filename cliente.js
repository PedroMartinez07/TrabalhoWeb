class Cliente {
    constructor() {
        this.clientes = localStorage.getItem('tbClientes') === null
        ? []
        : JSON.parse(localStorage.getItem('tbClientes'))
    }

    salva(cliente){

        if(document.getElementById('codigo').getAttribute('disabled')==='disabled'){
            this.apaga(cliente.codigo)
        }
        this.clientes.push(cliente) 
        localStorage.setItem('tbClientes', JSON.stringify(this.clientes))
        
    }

    apaga(codigo){
        let index = this.clientes.findIndex(cliente => cliente.codigo == codigo)
        this.clientes.splice(index, 1) 
        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        cliente.atualiza()
    }
    edita(cliente) {
        document.getElementById('codigo').setAttribute('disabled','disabled')
         document.getElementById('codigo').value
         document.getElementById('nome').value
        document.getElementById('cep').value
        document.getElementById('logradouro').value
        document.getElementById('bairro').value
         document.getElementById('cidade').value
         document.getElementById('observacoes').value
        document.getElementById('cpf').value
       document.getElementById('rg').value
        document.getElementById('telefone').value
        document.getElementById('nomefantasia').value
        document.getElementById('nascimento').value
       document.getElementById('email').value
    
    }

    lista(){
        const listagem = this.clientes.map((cliente) => (
            `<tr>
            <td>${cliente.codigo}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.bairro}</td>
            <td>${cliente.cidade}</td>
            <td>${cliente.telefone}</td>
            <td>${cliente.email}</td>
            <td>${cliente.nascimento}</td>
            <td>${cliente.observacoes}</td>
            <td>
                <button id='apagar' onClick='cliente.apaga(${cliente.codigo})'>
                🗑️Apagar</button>
                <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>
                ✏️Editar</button>
            </td>
            </tr>
            `
        ))
        return (`<table border='1' id="table">
        <caption id="caption"><strong> Cadastrados</strong></caption>
           <th>Código</th>  
            <th>Nome</th>  
            <th>Bairro</th>  
            <th>Cidade</th> 
            <th>Telefone</th>
            <th>Email</th>
            <th id="th">Nascimento</th>
            <th id="th">Observações</th>
            <th id="th"> Opções</th>
        
        <tbody id="tbody">${listagem}</tbody>      
        </table>
        `)
    }

    atualiza(){
        document.getElementById('listagem').innerHTML = cliente.lista()
    }
}
//instanciamos um novo objeto
const cliente = new Cliente()
//tratamos o botão salvar
document.getElementById('salvar').onclick = function ()  {
    const registro = {
        codigo: document.getElementById('codigo').value,
        nome: document.getElementById('nome').value,
        cep: document.getElementById('cep').value,
        logradouro: document.getElementById('logradouro').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        observacoes: document.getElementById('observacoes').value,
        cpf: document.getElementById('cpf').value,
        rg: document.getElementById('rg').value,
        telefone: document.getElementById('telefone').value,
        nomefantasia: document.getElementById('nomefantasia').value,
        nascimento: document.getElementById('nascimento').value,
        email: document.getElementById('email').value
    } 
    cliente.salva(registro)
}
//tratamos a listagem
window.onload = function(){
    cliente.atualiza()
}


