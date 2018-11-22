﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalStoque.API.Models.Contato
{
    interface IContatoRepositorio
    {
        IEnumerable<Contato> GetAll(string filter);
    }
}