export interface CadastroAAI {

    "data": {

        "dataRegistro": string,
        "codigoCorretora": string,
        "nomeCompleto": string

    }

}

function aai(params: any) {
    let processo: CadastroAAI = {
        
        data: {

            dataRegistro: "abc",
            codigoCorretora: "abc",
            nomeCompleto: "abc"

        }

    }

}
