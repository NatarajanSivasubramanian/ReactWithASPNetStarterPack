using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using System.Web.Http.Description;

namespace SampleReactApp.Controllers
{
    public class RestDemoController : ApiController
    {
        [HttpGet]
        [Route("api/RestDemo/GetSampleList/{maxItems}")]
        [ResponseType(typeof(SampleModel))]
        public IHttpActionResult GetSampleList(int maxItems)
        {
            List<SampleModel> modelList = new List<SampleModel>();

            for(int i=0; i<= maxItems;i++)
            {
                modelList.Add(new SampleModel() { Id = i, Name = "Sample " + i.ToString() });
            }

            Thread.Sleep(1000 * maxItems);
            
            if ((modelList == null) || (modelList.Count <= 0 ))
            {
                return NotFound();
            }
            else
            {
                return Ok(modelList);
            }
        }
    }

    public class SampleModel
    { 
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
