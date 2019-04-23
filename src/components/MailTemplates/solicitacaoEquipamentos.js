export function getHardwares(values) {
    const resp = []
    let index = 0

    for (var key in values) {
        if (values[key] === true) {
            resp[index] = key
            index++
        }
    };
    return resp.join(', ')
}

export const Sol_Equip_Mail = values =>
    `
    <table width="100%" align="center" data-mobile="true" cellpadding="0" cellspacing="0" border="0" dir="ltr" data-width="600" style="background-color: rgb(234, 239, 242);">

    <tbody><tr>

        <td align="center" valign="top" style="margin: 0; padding: 50px 0 70px;" class="responsive-cell">

            <table width="600" align="center" border="0" cellspacing="0" cellpadding="0" class="wrapper" style="border-radius: 251px; width: 600px;">

                <tbody>

                <tr>

                    <td align="center" valign="top" style="margin: 0; padding: 0;" class="responsive-cell">

                        <table align="center" border="0" cellpadding="0" cellspacing="0" data-editable="image" data-mobile-stretch="1" style="" width="100%">

                            <tbody><tr>

                                <td valign="top" align="left" style="display: inline-block; padding: 0px; margin: 0px; border-radius: 0px;" class="tdBlock responsive-cell"><img src="https://multimedia.getresponse.com/getresponse-GVoe5/photos/fc447799-228c-4959-8cba-0060bfac4924.png?img1556045271543" alt="" width="600" border="0" data-src="https://multimedia.getresponse.com/getresponse-GVoe5/photos/fc447799-228c-4959-8cba-0060bfac4924.png|600|272|600|400|0|0|1" data-origsrc="https://app.getresponse.com/images/common/templates/messages/1414/1/img/1414_02.png" class="mobile-image-stretch-enabled" style="border-width: 0px; border-style: none; border-color: transparent; font-size: 12px; display: block; width: 100%; max-width: 100% !important;"></td>

                            </tr>

                        </tbody></table>

                    </td>

                </tr><tr>

                    <td align="center" valign="top" style="margin: 0; padding: 0;" class="responsive-cell">

                        <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" data-editable="text" class="text-block">

                            <tbody><tr>

                                <td align="left" valign="top" class="lh-6" style="margin: 0px; padding: 10px; line-height: 1.65; background-color: rgb(234, 239, 242); font-size: 16px; font-family: 'Times New Roman', Times, serif; border-radius: 0px;"><div style="text-align: center;"><span style="color: rgb(43, 67, 70); font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-style: italic;"><font style="font-size: 22px;" size="22">SOLICITAÇÃO DE EQUIPAMENTOS</font></span></div></td>

                            </tr>

                        </tbody></table>

                    </td>

                </tr>

                <tr>

                    <td align="center" valign="top" style="margin: 0; padding: 0;" class="responsive-cell">

                        <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" data-editable="text" class="text-block">

                            <tbody><tr>

                                <td align="left" valign="top" class="lh-6" style="margin: 0px; padding: 11px; background-color: rgb(255, 255, 255); font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.65; border-radius: 0px;"><div style="text-align: center;"><span style="color: rgb(43, 67, 70); font-family: Arial, Helvetica, sans-serif; text-decoration: underline;"><font style="font-size: 19px;" size="19">Dados do Solicitante</font></span></div></td>

                            </tr>

                        </tbody></table>

                    </td>

                </tr>

                <tr>

                    <td align="center" valign="top" style="margin: 0; padding: 0;" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td valign="top" align="left" width="46%" style="padding: 0px; margin: 0px;" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td style="margin: 0px; padding: 0px;" align="center" valign="top" class="responsive-cell"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" data-editable="text" class="text-block">

                            <tbody><tr>

                                <td align="left" valign="top" class="lh-0" style="margin: 0px; padding: 4px; background-color: rgb(255, 255, 255); font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 2.05;"><div style="text-align: left;"><span style="color: rgb(43, 67, 70); font-family: Arial, Helvetica, sans-serif; font-weight: bold;">Nome:</span><span style="color: rgb(43, 67, 70); font-family: Arial, Helvetica, sans-serif;"> ${values.Nome}</span></div></td>

                            </tr>

                        </tbody></table></td></tr><tr><td style="margin: 0px; padding: 0px;" align="center" valign="top" class="responsive-cell"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" data-editable="text" class="text-block">

                            <tbody><tr>

                                <td align="left" valign="top" class="lh-0" style="margin: 0px; padding: 4px; background-color: rgb(255, 255, 255); font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 2.05;"><div style="text-align: left;"><span style="color: rgb(43, 67, 70); font-family: Arial, Helvetica, sans-serif; font-weight: bold;">Telefone:</span><span style="color: rgb(43, 67, 70); font-family: Arial, Helvetica, sans-serif;"> ${values.Telefone}</span></div></td>

                            </tr>

                        </tbody></table></td></tr></tbody></table></td><td valign="top" align="left" width="54%" style="padding: 0px; margin: 0px;" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td style="margin: 0px; padding: 0px;" align="center" valign="top" class="responsive-cell"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" data-editable="text" class="text-block">

                            <tbody><tr>

                                <td align="left" valign="top" class="lh-0" style="margin: 0px; padding: 4px; background-color: rgb(255, 255, 255); font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 2.05;"><div style="text-align: left;"><span style="color: rgb(43, 67, 70); font-family: Arial, Helvetica, sans-serif; font-weight: bold;">Email:</span><span style="color: rgb(43, 67, 70); font-family: Arial, Helvetica, sans-serif;"> ${values.Email}</span></div></td>

                            </tr>

                        </tbody></table></td></tr><tr><td style="margin: 0px; padding: 0px;" align="center" valign="top" class="responsive-cell"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" data-editable="text" class="text-block">

                            <tbody><tr>

                                <td align="left" valign="top" class="lh-0" style="margin: 0px; padding: 4px; background-color: rgb(255, 255, 255); font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 2.05;"><div style="text-align: left;"><br></div></td>

                            </tr>

                        </tbody></table></td></tr></tbody></table></td></tr></tbody></table></td>

                </tr>

            <tr>

                    <td align="center" valign="top" style="margin: 0; padding: 0;" class="responsive-cell">

                        <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" data-editable="text" class="text-block">

                            <tbody><tr>

                                <td align="left" valign="top" class="lh-6" style="margin: 0px; padding: 11px; background-color: rgb(255, 255, 255); font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.65; border-radius: 0px;"><div style="text-align: center;"><span style="color: rgb(43, 67, 70); font-family: Arial, Helvetica, sans-serif; text-decoration: underline;"><font style="font-size: 19px;" size="19">Equipamentos Solicitados</font></span></div></td>

                            </tr>

                        </tbody></table>

                    </td>

                </tr><tr><td style="margin: 0px; padding: 0px;" align="center" valign="top" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td valign="top" align="left" style="padding: 0px; margin: 0px;" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td style="margin: 0px; padding: 0px;" align="center" valign="top" class="responsive-cell"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" data-editable="text" class="text-block">

                            <tbody>

                            <tr>

                                <td align="left" valign="top" class="lh-0" style="margin: 0px; padding: 4px; background-color: rgb(255, 255, 255); font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 2.05;"><div style="text-align: left;"><span style="color: rgb(43, 67, 70); font-family: Arial, Helvetica, sans-serif; font-weight: bold;">Equipamentos:</span><span style="color: rgb(43, 67, 70); font-family: Arial, Helvetica, sans-serif;"> 

                                    ${getHardwares(values)}

                                    

                                    ${values.Observacao !== undefined

        ? `<div>

                                            <strong>Observação: </strong>

                                                <span>${values.Observacao}</span>

                                            </div>`

        : ''

    }

                                    

                                    </span></div>

                                </td>

                            </tr>

                            

                        </tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>

        </td>

    </tr>

</tbody></table>

    `