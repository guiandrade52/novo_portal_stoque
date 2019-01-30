﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalStoque.API.Models.Contatos
{
    interface IContatoRepositorio
    {
        IEnumerable<Contato> GetAll(string filter);
    }
}