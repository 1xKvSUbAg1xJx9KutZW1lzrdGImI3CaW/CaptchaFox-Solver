namespace CaptchaFoxSolver.Exceptions;

public class UnimplementedTaskException : Exception
{
    public UnimplementedTaskException() { }
    public UnimplementedTaskException(string message) : base(message) { }
}
