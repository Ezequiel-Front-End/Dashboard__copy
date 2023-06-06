export class ProcessoRendaVariavel {
    forEach(arg0: (item: any) => any) {
      throw new Error('Method not implemented.');
    }
    data: {
        // ctn_07

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

        // ctn_10

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
    } 