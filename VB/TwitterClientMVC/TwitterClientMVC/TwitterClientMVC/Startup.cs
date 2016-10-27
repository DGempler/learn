using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TwitterClientMVC.Startup))]
namespace TwitterClientMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
