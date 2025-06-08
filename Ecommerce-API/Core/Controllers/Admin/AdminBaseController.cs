using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Core.Controllers.Admin
{
    [Route("api/[controller]/Admin/[action]")]
    [ApiController]
    public class AdminBaseController : ControllerBase { }
}
