using Newtonsoft.Json;

namespace TwitterClientMVC.Controllers
{
    public class Movie
    {
        [JsonProperty("Title")]
        public string Title;
        [JsonProperty("Plot")]
        public string Plot;
        [JsonProperty("Actors")]
        public string Actors;
    }
}