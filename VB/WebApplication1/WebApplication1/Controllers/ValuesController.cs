using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class ValuesController : ApiController
    {
        static List<string> data = initList();

        private static List<string> initList()
        {
            var ret = new List<string>();
            ret.Add("value1");
            ret.Add("value2");
            return ret;
        }
        // GET api/values
        public IEnumerable<string> Get()
        {
            return data;
        }

        // GET api/values/5
        public HttpResponseMessage Get(int id)
        {
            if (data.Count > id)
            {
                return Request.CreateResponse<string>(HttpStatusCode.OK, data[id]);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "sorry, item not found man!");
            }
        }

        // POST api/values
        public HttpResponseMessage Post([FromBody]string value)
        {
            data.Add(value);
            var msg = Request.CreateResponse(HttpStatusCode.Created);
            msg.Headers.Location = new Uri(Request.RequestUri + "/" + (data.Count - 1).ToString());
            return msg;
        }

        // PUT api/values/5
        public string Put(int id, [FromBody]string value)
        {
            data[id] = value;
            return value;
        }

        // DELETE api/values/5
        public string Delete(int id)
        {
            var deleted = data[id];
            data.RemoveAt(id);
            return deleted;
        }
    }
}
