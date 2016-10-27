using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace TwitterClientMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            Movie model = null;
            var client = new HttpClient();
            var response = await client.GetAsync("http://www.omdbapi.com/?t=frozen");
            var readtask = response.Content.ReadAsAsync<Movie>();
            readtask.Wait();
            model = readtask.Result;
            return View(model);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}