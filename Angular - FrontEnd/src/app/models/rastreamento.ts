export interface Rastreamento {
    id: number;
    codigoRastreio: string;
    dataEvento: Date;
    statusEvento: string;
    fkCliente: string;
    destinoFinal: string;
    alteracaoStatus : string;
}
