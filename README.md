[logo]: /logo.png "CaptchaFox logo"

# CaptchaFox.com pure request solver
A solver for CaptchaFox written in C#, see [reversing folder](Reversing/) for partially deobfuscated javascript used for working out how it works. Deobfuscation was done with [Synchrony v2.2.2](https://deobfuscate.relative.im/). This captcha provider was reversed after it came in the way between me and generating gmx.com emails.

## Donations
* Bitcoin `bc1q568nq99mgjuqmh89x5gwm3gsr93jk3f8k0axt7`
* Litecoin `LLo2dhGzwv35X5QSZ7jE69j1DSr9FDfpQX`
* Ethereum `0x15F8B7a349E20ca8a578706443EdbE617e246c35`
* Monero  `45yRMvjnbo948dwMQAJ1hz79johJCgzy3QByXA9NEnM7CasTpMVsbMJKNaovyKVSyr7QEDX2NkwBd3vnpbHAYiec87zXzv`

## Usage
HTTP post to /solver, `website_url` and `captcha_key` are required while `proxy_url` is optional. For your `authorization` check Config.json, which will be automatically generated during first run.
## `http://127.0.0.1:5462/solver`
```json
{
  "website_url": "https://signup.gmx.com/#.1559516-header-signup1-1",
  "captcha_key": "sk_vKdD8WGlPF5FKpRDs1U4qTuu6Jv0w",
  "proxy_url": "http://username:password@127.0.0.1:1234"
}
```

## Updating
Inject the [user script provided in the reversing folder](Reversing/_userscript_interceptor.js) and see the "cs" property from the output when doing a captcha, these are your heuristics.