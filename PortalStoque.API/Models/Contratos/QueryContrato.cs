﻿using PortalStoque.API.Models.Usuarios;

namespace PortalStoque.API.Models.Contratos
{
    public class QueryContrato
    {
        public static string GetFilter(Permisoes permisao, string search)
        {
            string _where = @"WHERE CON.NUMCONTRATO <> 0 AND CON.ATIVO = 'S' ";

            if(!string.IsNullOrEmpty(search))
            {
                _where = string.Format("{0} AND PAR.NOMEPARC LIKE '{1}%' ",_where, search);
            }

            if (permisao.Perfil == "C" || permisao.Perfil == "CO")
            {
                if (!string.IsNullOrEmpty(permisao.ClienteAb) && !string.IsNullOrEmpty(permisao.NumContrato))
                    _where = string.Format("{0} AND PAR.CODPARC IN ({1}) AND CON.NUMCONTRATO IN({2}) {3}", _where, permisao.ClienteAb, permisao.NumContrato, search);
                else
                    _where = "AND PAR.CODPARC IN (-1)";
            }
            return _where;
        }
    }
}