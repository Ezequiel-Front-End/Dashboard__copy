export class ProcessoRendaVariavel {
    data: {
        // ctn_07
        dataTemplate: {

            template: [

                {
                    ticker: {
                        value: string;
                        label: string;
                    };


                    quantidade: number;
                    financeiroCompra: number;
                    financeiroAtual: number;
                    financeiro: number;

                    // observação
                    percentualInativo: string;
                    percentualAtivo: string;

                    encerrado: {

                        value: string;
                        label: string;

                    };

                    dataEncerramento: null;

                }


            ];
        } | any;


        // ctn_10
        dataTemplateOpcao: {


            templateOpcao: [

                {
                    ticker: {
                        value: string;
                        label: string;
                    };


                    quantidade: number;
                    financeiroCompra: number;
                    financeiroAtual: number;
                    strikeOpcao: number;


                    encerrado: {
                        value: string;
                        label: string;
                    };


                    dataEncerramento: null;
                    financeiro: number;
                    percentualInativo: string;
                    percentual: string;

                }

            ];

            encerrado: {
                value: string;
                label: string;
            };

            financeiroCompra: number;
            ticker: string;

        } | any;
    } | any
}

/*function rendaVariavel(params: any) {
    let processo: ProcessoRendaVariavel = {
        dataTemplate: {

            template: [

                {
                    ticker: {
                        value: params["slt_00001"]["value"],
                        label: params["slt_00001"]["label"]
                    },

                    quantidade: 12,
                    financeiroCompra: 12,
                    financeiroAtual: 12,
                    financeiro: 12,

                    percentualInativo: "abc",
                    percentualAtivo: "abc",

                    encerrado: {
                        value: params["slt_00002"]["value"],
                        label: params["slt_00002"]["label"]
                    },

                    dataEncerramento: null,
                    j_id: "abc"

                }
            ]
        },
        dataTemplateOpcao: {

            templateOpcao: [

                {
                    ticker: {
                        value: params["slt_00001"]["value"],
                        label: params["slt_00001"]["value"]
                    },


                    quantidade: 11,
                    financeiroCompra: 11,
                    financeiroAtual: 11,
                    strikeOpcao: 11,


                    encerrado: {
                        value: params["slt_00002"]["value"],
                        label: params["slt_00002"]["value"]
                    },


                    dataEncerramento: null,
                    financeiro: 11,
                    percentualInativo: "abc",
                    percentual: "abc",

                    j_id: "abc"
                },


            ],

            encerrado: {
                value: params["slt_00002"]["value"],
                label: params["slt_00002"]["value"]
            },

            financeiroCompra: 11,
            ticker: "abc"

        }
    }
}*/