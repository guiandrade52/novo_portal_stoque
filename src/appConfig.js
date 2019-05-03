const URL_BASE = 'http://devportal.stoque.com.br/Aplicacao'
// const URL_BASE = 'http://localhost:64966'

const EXTENSIONS = {
    embed: ['jpg', 'jpeg', 'png', 'pdf', 'txt'],
    office: ['doc', 'docx', 'xlsx', 'xls', 'pptx', 'ppt']
}

const VIEWS = {
    microsoft: 'https://view.officeapps.live.com/op/view.aspx?src=',
    google: 'https://docs.google.com/viewerng/viewer?url='
}

export const localStorageKey = 'portal_keyData'

const statusSituacao = [
    { id: 1, label: 'Aguardando Classificação', color: '#ff9933' },
    { id: 2, label: 'Em Andamento', color: '#ffff00' },
    { id: 3, label: 'Aguardando Cliente', color: '#3333cc' },
    { id: 4, label: 'Aguardando Terceiros', color: '#7070db' },
    { id: 5, label: 'Cliente Cancelou Ocorrencia', color: '#ff0000' },
    { id: 6, label: 'Service Desk Cancelou a Ocorrencia', color: '#ff0066' },
    { id: 7, label: 'Central de Atendimento Cancelou Ocorrência', color: '#cc0099' },
    { id: 8, label: 'Concluida', color: '#33cc33' },
    { id: 9, label: 'Aguardando Peças', color: '#993333' },
    { id: 11, label: 'Solução Proposta', color: '#ff9966' },
    { id: 12, label: 'Cancelado - Aguarando Avaliação', color: '#ff5050' },
    { id: 13, label: 'Aguardando Atribuição', color: '#66ffff' },
    { id: 14, label: 'Reclassificar Ocorrência', color: '#cc6699' },
    { id: 15, label: 'Despachado', color: '#003300' },
    { id: 16, label: 'Conclusão Serviço', color: '#336600' },
    { id: 17, label: 'Ag. Pc. No Local', color: '#996600' },
    { id: 18, label: 'Concluida - Validação Negada', color: '#0066ff' },
    { id: 19, label: 'Concluida - Garantia Fab.', color: '#000066' },
    { id: 20, label: 'Concluida Solucionado Backup', color: '#339933' },
    { id: 21, label: 'Aguardando Atendimento', color: '#669999' }
]


export const appConfig = {
    URL_BASE,
    EXTENSIONS,
    VIEWS,
    statusSituacao
};


export const configMail = {
    html: undefined,
    assunto: undefined,
    empresa: 1,
    formreset: undefined
}

export const Ocor_Template = values => {
    debugger
    return {
        contrato: 96,
        CodParcCon: 1,
        CodParc: values.CodParc,
        CodContato: values.CodContato,
        Email: values.Email,
        Telefone: values.Telefone,
        Cep: 30240380,
        CodEndereco: 122156,
        Numero: 168,
        CodBairro: 1,
        CodCidade: 2754,
        Descricao: undefined,
        CodProduto: 21701
    }
}
