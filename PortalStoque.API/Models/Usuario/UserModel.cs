﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalStoque.API.Models.Usuario
{
    public class UserModel
    {
        public int IdUsuario { get; set; }
        public string Nome { get; set; }
        public string Login { get; set; }
        public string Perfil { get; set; }
        public string Email { get; set; }
        public char AltPassword { get; set; }
        public char RgtOcorrencia { get; set; }
        public int CodParc { get; set; }
        public string Telefone { get; set; }
        public string ClienteAb { get; set; }
        public string ClienteAt { get; set; }
        public int CodContato { get; set; }
        public string NumContrato { get; set; }
    }

}