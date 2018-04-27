enum TIPO {ADMIN, INSPETOR, COMENSAL};
export interface Role {
    id: number
    nome: string
    descicao: string
    tipo: TIPO
}