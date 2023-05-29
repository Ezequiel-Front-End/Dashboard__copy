export class CadastroTicker {

    data: {

        setor: {
            value: string;
            label: string;
        };

        tipo: {
            value: string;
            label: string;
        };

        empresa: string;
        ticker: string;

    } | undefined;

}


// function ticker(params: any) {
//     let processo: cadastroTicker = {

//         data: {

//             setor: {
//                 value: params["slt_00002"]["value"],
//                 label: params["slt_00002"]["label"]
//             },

//             tipo: {
//                 value: params["slt_00003"]["value"],
//                 label: params["slt_00003"]["label"]
//             },

//             empresa: "abc",
//             ticker: "abc"
//         }

//     }
// }
