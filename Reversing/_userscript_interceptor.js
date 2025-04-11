// ==UserScript==
// @name        New script captchafox.com
// @namespace   Violentmonkey Scripts
// @match       https://captchafox.com/*
// @grant       none
// @version     1.0
// @author      -
// @run-at      document-start
// @description 10/04/2025, 22:37:17
// ==/UserScript==

console.log('TextEncoder interceptor injected')

window.TextEncoder = new Proxy(TextEncoder, {
	construct(target, args) {
		const encoder = new target(...args);

		const originalEncode = encoder.encode;
		encoder.encode = function (data) {
			console.log(JSON.parse(data));
			return originalEncode.apply(this, arguments);
		};

		return encoder;
	}
});