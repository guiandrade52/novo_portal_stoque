function getAcessos(values) {
    const resp = []
    let index = 0

    for (var key in values) {
        if (key !== 'registraOcor')
            if (values[key] === true) {
                resp[index] = key
                index++
            }
    };
    return resp.join(', ')
}

export const Sol_Acessos_Mail = values =>
    `
    <table width="100%" cellpadding="0" cellspacing="0" border="0" data-mobile="true" dir="ltr" align="center" data-width="800" style="font-size: 16px; background-color: rgb(255, 255, 255);">

    <tbody><tr>
    
        <td align="center" valign="top" style="padding:30px 0 51px;margin:0;" class="responsive-cell">
    
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="800" style="margin: 0px; background-image: none; width: 800px;" bgcolor="#f50057" class="wrapper">
    
                <tbody>
    
                <tr>
    
                    <td valign="top" align="left" style="padding:0;margin:0;" class="responsive-cell">
    
                        <table border="0" cellpadding="0" cellspacing="0" align="left" width="100%" bgcolor="#fafafa" style="margin:0;padding:0;">
    
                            <tbody>
    
                            <tr><td align="center" valign="top" style="margin: 0px; padding: 0px;" class="responsive-cell"><table cellpadding="0" cellspacing="0" align="center" data-editable="image" data-mobile-stretch="1" style="" width="96%"><tbody><tr><td valign="top" align="left" style="display: inline-block; padding: 10px 0px; margin: 0px;" class="tdBlock responsive-cell"><img src="https://multimedia.getresponse.com/getresponse-GVoe5/photos/03d6cbb6-27eb-43e4-b397-d5225b68881e.jpg?img1556046486056" width="771" data-src="https://multimedia.getresponse.com/getresponse-GVoe5/photos/03d6cbb6-27eb-43e4-b397-d5225b68881e.jpg|771|243|800|232|0|0|1" data-origsrc="https://multimedia.getresponse.com/getresponse-GVoe5/photos/3f578e13-f923-41ac-b934-733b5b902888.jpg" class="mobile-image-stretch-enabled" style="border-width: 0px; border-style: none; border-color: transparent; font-size: 12px; display: block; width: 100%; max-width: 100% !important;"></td></tr></tbody></table></td></tr><tr>
    
                                <td align="left" valign="top" style="margin:0;padding:0;" class="responsive-cell">
    
                                    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="margin:0;padding:0;" data-editable="text" class="text-block">
    
                                        <tbody><tr>
    
                                            <td valign="top" align="left" class="lh-4" style="padding: 27px 50px; margin: 0px; font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.45;"><div style="text-align: center;"><span style="color: rgb(245, 0, 87); font-family: Tahoma, Helvetica, sans-serif; font-size: 18px; font-weight: 700; background-color: transparent; text-decoration: underline;">DADOS DO SOLICITANTE</span></div></td>
    
                                        </tr>
    
                                    </tbody></table>
    
                                </td>
    
                            </tr>
    
                            <tr>
    
                                <td align="left" valign="top" style="margin:0;padding:0;" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td valign="top" align="left" width="32%" style="padding: 0px; margin: 0px;" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td style="margin: 0px; padding: 0px;" align="left" valign="top" class="responsive-cell"><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="margin:0;padding:0;" data-editable="text" class="text-block">
    
                                        <tbody><tr>
    
                                            <td valign="top" align="left" class="lh-3" style="padding: 0px; margin: 0px; font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.35;"><span style="font-family: Arial, Helvetica, sans-serif; color: rgb(245, 0, 87);"><font style="font-size: 16px;" size="16"><span style="font-weight: bold;">Nome: </span>${values.Nome}</font></span></td>
    
                                        </tr>
    
                                    </tbody></table></td></tr></tbody></table></td><td valign="top" align="left" width="39%" style="padding: 0px; margin: 0px;" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td style="margin: 0px; padding: 0px;" align="left" valign="top" class="responsive-cell"><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="margin:0;padding:0;" data-editable="text" class="text-block">
    
                                        <tbody><tr>
    
                                            <td valign="top" align="left" class="lh-3" style="padding: 0px; margin: 0px; font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.35;"><span style="font-family: Arial, Helvetica, sans-serif; color: rgb(245, 0, 87);"><font style="font-size: 16px;" size="16"><span style="font-weight: bold;">E-mail: </span>${values.Email}</font></span></td>
    
                                        </tr>
    
                                    </tbody></table></td></tr></tbody></table></td><td valign="top" align="left" width="29%" style="padding: 0px; margin: 0px;" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td style="margin: 0px; padding: 0px;" align="left" valign="top" class="responsive-cell"><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="margin:0;padding:0;" data-editable="text" class="text-block">
    
                                        <tbody><tr>
    
                                            <td valign="top" align="left" class="lh-3" style="padding: 0px; margin: 0px; font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.35;"><span style="font-family: Arial, Helvetica, sans-serif; color: rgb(245, 0, 87);"><font style="font-size: 16px;" size="16"><span style="font-weight: bold;">Telefone: </span>${values.Telefone}</font></span></td>
    
                                        </tr>
    
                                    </tbody></table></td></tr></tbody></table></td></tr></tbody></table></td>
    
                            </tr>
    
                            
    
                        </tbody></table>
    
                    </td>
    
                </tr>
    
                <tr>
    
                    <td valign="top" align="left" style="padding:0;margin:0;" class="responsive-cell">
    
                        <table border="0" cellpadding="0" cellspacing="0" align="left" width="100%" bgcolor="#ffffff">
    
                            <tbody><tr>
    
                                <td align="left" valign="top" style="margin:0;padding:0;" class="responsive-cell">
    
                                    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="margin:0;padding:0;" data-editable="text" class="text-block">
    
                                        <tbody><tr>
    
                                            <td valign="top" align="left" class="lh-4" style="padding: 27px 50px; margin: 0px; font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.45;"><div style="text-align: center;"><span style="color: rgb(245, 0, 87); font-family: Tahoma, Helvetica, sans-serif; font-size: 18px; font-weight: 700; background-color: transparent; text-decoration: underline;">DADOS DO USUÁRIO</span></div></td>
    
                                        </tr>
    
                                    </tbody></table>
    
                                </td>
    
                            </tr><tr><td style="margin: 0px; padding: 0px;" align="left" valign="top" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td valign="top" align="left" width="31%" style="padding: 0px; margin: 0px;" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td style="margin: 0px; padding: 0px;" align="left" valign="top" class="responsive-cell"><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="margin:0;padding:0;" data-editable="text" class="text-block">
    
                                        <tbody><tr>
    
                                            <td valign="top" align="left" class="lh-3" style="padding: 0px; margin: 0px; font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.35;"><span style="font-family: Arial, Helvetica, sans-serif; color: rgb(245, 0, 87);"><font style="font-size: 16px;" size="16"><span style="font-weight: bold;">Nome: </span>${values.nome_usuario}</font></span></td>
    
                                        </tr>
    
                                    </tbody></table></td></tr></tbody></table></td><td valign="top" align="left" width="36%" style="padding: 0px; margin: 0px;" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td style="margin: 0px; padding: 0px;" align="left" valign="top" class="responsive-cell"><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="margin:0;padding:0;" data-editable="text" class="text-block">
    
                                        <tbody><tr>
    
                                            <td valign="top" align="left" class="lh-3" style="padding: 0px; margin: 0px; font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.35;"><span style="font-family: Arial, Helvetica, sans-serif; color: rgb(245, 0, 87);"><font style="font-size: 16px;" size="16"><span style="font-weight: bold;">E-mail: </span>${values.email_usuario}</font></span></td>
    
                                        </tr>
    
                                    </tbody></table></td></tr></tbody></table></td><td valign="top" align="left" width="33%" style="padding: 0px; margin: 0px;" class="responsive-cell"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tbody><tr><td style="margin: 0px; padding: 0px;" align="left" valign="top" class="responsive-cell"><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="margin:0;padding:0;" data-editable="text" class="text-block">
    
                                        <tbody><tr>
    
                                            <td valign="top" align="left" class="lh-3" style="padding: 0px; margin: 0px; font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.35;"><span style="font-family: Arial, Helvetica, sans-serif; color: rgb(245, 0, 87);"><font style="font-size: 16px;" size="16"><span style="font-weight: bold;">Telefone: </span>${values.telefone_usuario}</font></span></td>
    
                                        </tr>
    
                                    </tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr>
    
                            
    
                            
    
                            
    
                        </tbody></table>
    
                    </td>
    
                </tr>
    
                
    
            <tr>
    
                                <td align="left" valign="top" style="margin:0;padding:0;" class="responsive-cell">
    
                                    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="margin:0;padding:0;" data-editable="text" class="text-block">
    
                                        <tbody><tr>
    
                                            <td valign="top" align="left" class="lh-4" style="padding: 27px 50px; margin: 0px; font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.45; background-color: rgb(255, 255, 255);"><div style="text-align: center;"><span style="color: rgb(245, 0, 87); font-family: Tahoma, Helvetica, sans-serif; font-size: 18px; font-weight: 700; text-decoration: underline;">ACESSOS</span></div></td>
    
                                        </tr>
    
                                    </tbody></table>
    
                                </td>
    
                            </tr><tr><td style="margin: 0px; padding: 0px;" align="left" valign="top" class="responsive-cell"><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="margin:0;padding:0;" data-editable="text" class="text-block">
    
                                        <tbody><tr>
    
                                            <td valign="top" align="left" class="lh-3" style="padding: 10px; margin: 0px; font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.35; background-color: rgb(255, 255, 255);"><span style="font-family: Arial, Helvetica, sans-serif; color: rgb(245, 0, 87);"><font style="font-size: 16px;" size="16"><span style="font-weight: bold;">Acessos: </span>${getAcessos(values)}</font></span></td>
    
                                        </tr>
    
                                    </tbody></table></td></tr><tr><td style="margin: 0px; padding: 0px;" align="left" valign="top" class="responsive-cell">
    
                                    ${values.observacoes

        ? ``

        : ''

    }
    
                                    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="margin:0;padding:0;" data-editable="text" class="text-block"><tbody><tr>
    
                                                <td valign="top" align="left" class="lh-3" style="padding: 10px; margin: 0px; font-size: 16px; font-family: 'Times New Roman', Times, serif; line-height: 1.35; background-color: rgb(255, 255, 255);"><span style="font-family: Arial, Helvetica, sans-serif; color: rgb(245, 0, 87);"><font style="font-size: 16px;" size="16"><span style="font-weight: bold;">Observações: </span>${values.observacoes}</font></span></td>
    
                                                    </tr>
    
                                                </tbody></table></td></tr></tbody></table>
    
        </td>
    
    </tr>
    
    </tbody></table>
    

`