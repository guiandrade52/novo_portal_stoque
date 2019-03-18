
const serialize = data => {
    const Log_Sistemas = []
    const Hard_Install = []
    const Soft_Install = []

    /**
     * Sistemas Para criar login
     */
    data.Log_Abaris === true && Log_Sistemas.push('Abaris')
    data.Log_Email === true && Log_Sistemas.push('E-mail')
    data.Log_PortalStoque === true && Log_Sistemas.push('Portal Stoque')
    data.Log_Rede === true && Log_Sistemas.push('Rede')
    data.Log_Sankhya === true && Log_Sistemas.push('Sankhya')

    /**
     * Hardwares a serem instalados
     */
    data.Hard_Celular === true && Hard_Install.push('Celular')
    data.Hard_Chip === true && Hard_Install.push('Chip')
    data.Hard_EquipamentosDisponiveis === true && Hard_Install.push('Necessito todos equipamentos')
    data.Hard_Monitor === true && Hard_Install.push('Monitor')
    data.Hard_Mouse === true && Hard_Install.push('Mouse')
    data.Hard_NaoNecessitaEquipamentos === true && Hard_Install.push('Não necessita nenhum equipamento')
    data.Hard_Notebook === true && Hard_Install.push('Notebook')
    data.Hard_Notebook === true && Hard_Install.push('Teclado')
    data.Hard_Telefone === true && Hard_Install.push('Telefone')

    /**
     * Instalar softwares
     */
    data.Soft_AlterdataERP === true && Soft_Install.push('Alterdata ERP')
    data.Soft_Contaction === true && Soft_Install.push('Contaction')
    data.Soft_Sigep === true && Soft_Install.push('Sigep')
    data.Soft_VisualStudio === true && Soft_Install.push('Visual Studio')

    return { ...data, Log_Sistemas: Log_Sistemas.toString(), Hard_Install: Hard_Install.toString(), Soft_Install: Soft_Install.toString() }
}

export const novoColaboradorServices = {
    serialize
}