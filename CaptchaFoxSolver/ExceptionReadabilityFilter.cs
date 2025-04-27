using CaptchaFoxSolver.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace CaptchaFoxSolver
{

    public class ExceptionReadabilityFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            context.ExceptionHandled = true;
            if (context.Exception is InvalidAuthorizationException authorizationExcept)
            {
                context.Result = new JsonResult(new FilterExceptionResponse("this captchafox solver server enforces authentication and your authentication header does not match \"authorization_token\" in the config", 325)) { StatusCode = 401 };
                return;
            }

            if(context.Exception is InvalidRequestException invalidRequest)
            {
                context.Result = new JsonResult(new FilterExceptionResponse(invalidRequest.Message, 239)) { StatusCode = 400 };
                return;
            }

            if (context.Exception is UnimplementedTaskException unimplementedTask)
            {
                context.Result = new JsonResult(new FilterExceptionResponse(unimplementedTask.Message, 983)) { StatusCode = 500 };
                return;
            }

            if (context.Exception is InvalidSolutionException)
            {
                context.Result = new JsonResult(new FilterExceptionResponse("unable to get a solution, try again", 165)) { StatusCode = 500 };
                return;
            }

            if (context.Exception is ConfigFetchingException)
            {
                context.Result = new JsonResult(new FilterExceptionResponse("unable to fetch config, check if your \"website_url\" and \"captcha_key\" are correct", 841)) { StatusCode = 400 };
                return;
            }

#if DEBUG
            context.ExceptionHandled = false;
#else
            context.Result = new JsonResult(new FilterExceptionResponse(context.Exception.Message, 734)) { StatusCode = 500 };
#endif
        }
    }

    file class FilterExceptionResponse : ActionResult
    {
        public string Message { get;set; }
        public int Code { get; set; }
        [JsonInclude] private string SourceReference { get; set; } = "https://github.com/1xKvSUbAg1xJx9KutZW1lzrdGImI3CaW/CaptchaFox-Solver";

        public FilterExceptionResponse(string message, int code)
        {
            Message = message;
            Code = code;
        }
    }
}