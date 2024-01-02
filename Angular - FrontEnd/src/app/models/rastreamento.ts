export interface Rastreamento {
    id: number;
    codigoRastreio: string;
    dataEvento: Date;
    statusEvento: string;
    fkCliente: number;
    destinoFinal: string;
    alteracaoStatus : string;
}
