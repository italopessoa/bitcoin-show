using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using System.ComponentModel;
using Microsoft.AspNetCore.Cors;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{

    public enum LevelEnum : byte
    {
        Easy = 0,
        Medium = 1,
        Hard = 2
    }

    //https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger
    //https://docs.microsoft.com/en-us/azure/app-service-api/app-service-api-dotnet-swashbuckle-customize

    /// <summary>
    /// controler teste
    /// </summary>
    [Route("api/[controller]")]
    [EnableCors("MP")]
    public class QuestionsController : Controller
    {
        // GET api/values/5
        /// <summary>
        /// Get a random question
        /// </summary>
        /// <param name="level">0 = Easy, 1 = Medium, 2 = Hard</param>
        /// <remarks>Get a random question based on the level parameter.</remarks>
        /// <response code="200">Returns a Question</response>
        /// <returns>Question</returns>
        [HttpGet("{level?}")]
        [ProducesResponseType(typeof(Question), 200)]
        public IActionResult Get(LevelEnum level = LevelEnum.Easy)
        {
            return Ok(
                new { question = this.GenerateRandomQuestion() }
            );
        }

        private Question GenerateRandomQuestion()
        {
            Question a = new Question { Id = 0,Level='e',Text = $"Question {DateTime.Now.ToLongDateString()}?"};
            Option[] ops = new Option[4];
            for (byte i = 1; i < 5; i++)
            {
                ops[i-1]= new Option {Number=i, Text=Guid.NewGuid().ToString()};
                a.Answer = ops[i-1];
            }
            a.Options = ops;
            return a;
        }

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
