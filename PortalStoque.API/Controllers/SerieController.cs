﻿using PortalStoque.API.Models.Series;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PortalStoque.API.Controllers
{
    public class SerieController : ApiController
    {
        static readonly ISerieRepositorio _serieRepositorio = new SerieRepositorio();
        public HttpResponseMessage GetAll(string search)
        {
            var u = new services.UsuarioCorrent();
            var user = u.GetPermisoes();
            string filter = QuerySerie.GetFilter(user, search);

            return Request.CreateResponse(HttpStatusCode.OK, _serieRepositorio.GetAll(filter));
        }
    }
}
