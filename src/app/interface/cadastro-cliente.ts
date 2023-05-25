export interface cadastroCliente {

    "data": {

        "email": string,
        "telefone": string,
        "nome": string
        
    }

}
function cliente(params:any) {
    let processo: cadastroCliente = {

        data: {

            email: "abc",
            telefone: "abc",
            nome: "abc"
            
        }
    }
}