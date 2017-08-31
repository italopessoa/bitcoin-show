using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using System.ComponentModel;
using Microsoft.AspNetCore.Cors;
using System.Text;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using System.Globalization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    public enum LevelEnum : byte
    {
        Easy = 0,
        Medium = 1,
        Hard = 2
    }

    public class Award
    {
        public byte Number { get; set; }
        public double Right { get; set; }
        public double Stop { get; set; }
        public double Wrong { get; set; }
        public LevelEnum Level { get; set; }
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
        [HttpGet("RandomQuestionByLevel/{level}")]
        [ProducesResponseType(typeof(Question), 200)]
        public IActionResult Get(LevelEnum level)
        {
            return Ok(GenerateRandomQuestion(level));
        }

        [HttpGet("awards")]
        public async Task<IActionResult> GetAwards()
        {
            double bitcoinBRLValue = 1;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://min-api.cryptocompare.com");
                var response = await client.GetAsync("/data/pricemulti?fsyms=BTC&tsyms=USD,BRL");
                if (response.IsSuccessStatusCode)
                {
                    string result = await response.Content.ReadAsStringAsync();
                    JToken token = JObject.Parse(result);
                    JToken brl = token.SelectToken("BTC.BRL");
                    bitcoinBRLValue = brl != null ? double.Parse(brl.ToString()) : bitcoinBRLValue;
                }
            }

            List<Award> awards = new List<Award>
            {
                new Award {Number= 1,Right= 500,Stop= 0,Wrong= 0},
                new Award {Number= 2,Right= 600,Stop= 500,Wrong= 250},
                new Award {Number= 3,Right= 700,Stop= 600,Wrong= 300},
                new Award {Number= 4,Right= 800,Stop= 750,Wrong= 350},
                new Award {Number= 5,Right= 900,Stop= 800,Wrong= 400},
                new Award {Number= 6,Right= 1000,Stop= 900,Wrong= 450},
                new Award {Number= 7,Right= 2000,Stop= 1000,Wrong= 500},
                new Award {Number= 8,Right= 3000,Stop= 2000,Wrong= 1000},
                new Award {Number= 9,Right= 4000,Stop= 3000,Wrong= 1500},
                new Award {Number= 10,Right= 5000,Stop= 4000,Wrong= 2000},
                new Award {Number= 11,Right= 6000,Stop= 5000,Wrong= 2500},
                new Award {Number= 12,Right= 10000,Stop= 6000,Wrong= 3000},
                new Award {Number= 13,Right= 20000,Stop= 10000,Wrong= 5000},
                new Award {Number= 14,Right= 30000,Stop= 20000,Wrong= 10000},
                new Award {Number= 15,Right= 40000,Stop= 30000,Wrong= 15000},
                new Award {Number= 16,Right= 50000,Stop= 40000,Wrong= 20000},
                new Award {Number= 17,Right= 60000,Stop= 50000,Wrong= 25000},
                new Award {Number= 18,Right= 100000,Stop= 60000,Wrong= 30000},
                new Award {Number= 19,Right= 200000,Stop= 100000,Wrong= 50000},
                new Award {Number= 20,Right= 300000,Stop= 200000,Wrong= 100000},
                new Award {Number= 21,Right= 400000,Stop= 300000,Wrong= 150000},
                new Award {Number= 22,Right= 500000,Stop= 400000,Wrong= 200000},
                new Award {Number= 23,Right= 600000,Stop= 500000,Wrong= 250000},
                new Award {Number= 24,Right= 1000000,Stop= 600000,Wrong= 0}
            };

            foreach (var item in awards)
            {
                if (bitcoinBRLValue > 1)
                {
                    item.Right = Math.Round((item.Right / bitcoinBRLValue), 3);
                    item.Stop = Math.Round((item.Stop > 0 ? (item.Stop / bitcoinBRLValue) : 0), 3);
                    item.Wrong = Math.Round((item.Wrong > 0 ? (item.Wrong / bitcoinBRLValue) : 0), 3);
                }
            }
            return Ok(awards);
        }

        private static Question GenerateRandomQuestion(LevelEnum levelEnum)
        {
            string level = String.Empty;
            switch (levelEnum)
            {
                case LevelEnum.Easy:
                    level = "Easy";
                    break;
                case LevelEnum.Medium:
                    level = "Medium";
                    break;
                case LevelEnum.Hard:
                    level = "Hard";
                    break;
                default:
                    level = "Easy";
                    break;
            }

            Question a = new Question { Id = DateTime.Now.Millisecond, Level = 'e', Text = $"{level} {DateTime.Now.ToString(CultureInfo.CurrentCulture)}?" };
            Option[] ops = new Option[4];
            for (byte i = 1; i < 5; i++)
            {
                ops[i - 1] = new Option { Number = i, Text = Guid.NewGuid().ToString() };
            }
            a.Answer = ops[0];///new Random().Next(0, 4)];
            a.Options = ops;
            return a;
        }
    }
}
