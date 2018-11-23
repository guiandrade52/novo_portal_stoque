﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalStoque.API.Models.Usuarios
{
    public class QueryUsuario
    {
        public static string GetFilter(Permisoes permisao)
        {
            string _where = "";

            if (permisao.Perfil == "C" || permisao.Perfil == "CO")
            {
                if (!string.IsNullOrEmpty(permisao.ClienteAb) && !string.IsNullOrEmpty(permisao.NumContrato))
                    _where = string.Format(@"SELECT TOP 100
	                                            PRL.IDUSUPRTL AS IdUsuario, 
	                                            PRL.NOMEUSU AS Nome
                                            FROM AD_USUPRTL PRL
                                            INNER JOIN AD_USUPRTLCON PARCON WITH(NOLOCK) ON PARCON.IDUSUPRTL = PRL.IDUSUPRTL
                                            WHERE PRL.NOMEUSU IS NOT NULL
                                            AND PARCON.NUMCONTRATO IN ({0})", permisao.NumContrato);
            }
            else
            {
                _where = string.Format(@"SELECT TOP 100
                                            IDUSUPRTL AS IdUsuario, 
                                            NOMEUSU AS Nome
                                        FROM AD_USUPRTL
                                        WHERE NOMEUSU IS NOT NULL");
            }
            return _where;
        }
    }
}