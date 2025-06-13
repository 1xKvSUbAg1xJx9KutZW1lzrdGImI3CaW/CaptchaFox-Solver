
using System.IO.Compression;
using System.Net;
using System.Net.Http.Headers;
using System.Text.Json;

namespace CaptchaFoxSolver;

internal class FoxStreamContent<T> : HttpContent where T : class
{
    private readonly byte[] _serializedData;

    public FoxStreamContent(T value, JsonSerializerOptions? options = null)
    {
        Headers.ContentType = MediaTypeHeaderValue.Parse("text/plain");
        using var buffer = new MemoryStream();
        using (var gzip = new GZipStream(buffer, CompressionMode.Compress, true))
            JsonSerializer.Serialize(gzip, value, options);

        //  qT = 2 + qS.length,
        _serializedData = new byte[buffer.Length + 2];

        /*
            qV[qW++] = 1
            qV[qW++] = 4
            for (let qX = 0; qX < qS.length; ++qX) {
                qV[qW++] = qS[qX] ^ (qX + 4)
            }
        */

        int n = 0;

        _serializedData[n++] = 1;
        _serializedData[n++] = 4;

        for(int i = 0; i < buffer.Length; i++)
            _serializedData[n++] = (byte)(buffer.GetBuffer()[i] ^ (i + 4));
    }

    protected override Task SerializeToStreamAsync(Stream stream, TransportContext? context)
        => stream.WriteAsync(_serializedData).AsTask();

    protected override bool TryComputeLength(out long length)
    {
        length = _serializedData.Length;
        return true;
    }
}
