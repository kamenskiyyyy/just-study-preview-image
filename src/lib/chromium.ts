import PCR from 'puppeteer-chromium-resolver';

async function getPage() {
    const stats = await PCR();

    const browser = await stats.puppeteer.launch({ ignoreDefaultArgs: ['--disable-extensions'], headless: true });
    return await browser.newPage();
}

export async function getScreenshot(html: string) {
    const page = await getPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
    await page.setContent(html);
    return await page.screenshot({ type: 'png' });
}
