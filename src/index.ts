import {Event} from "./types";
import { getScreenshot } from "./lib/chromium";
import { getHtml } from "./lib/template";

module.exports.handler = async function (event: Event) {
    const html = getHtml(event.queryStringParameters);
    const file = await getScreenshot(html);

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'image/png',
            "Cache-Control":"public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
        },
        isBase64Encoded: false,
        body: file
    }
};
