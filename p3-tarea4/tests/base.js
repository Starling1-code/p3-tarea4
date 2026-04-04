import { Builder, By, until } from 'selenium-webdriver';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chrome from 'selenium-webdriver/chrome.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class TestBase {
    constructor(testName) {
        this.driver = null;
        this.testName = testName;
        this.screenshotDir = path.join(__dirname, '../screenshots', testName);
        this.resultsFile = path.join(__dirname, '../results.json');
        this.results = [];
    }

    async setup() {
        this.driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(
                new chrome.Options()
                    .addArguments('--user-data-dir=C:/tmp/chrome-test-profile')
                    .addArguments('--disable-extensions')
                    .addArguments('--remote-allow-origins=*')
            )
            .build();

        if (!fs.existsSync(this.screenshotDir)) {
            fs.mkdirSync(this.screenshotDir, { recursive: true });
        }

        if (fs.existsSync(this.resultsFile)) {
            const data = fs.readFileSync(this.resultsFile, 'utf8');
            this.results = JSON.parse(data);
        }
    }

    async teardown() {
        if (this.driver) {
            await this.driver.quit();
        }
    }

    async takeScreenshot(scenarioName) {
        try {
            const screenshot = await this.driver.takeScreenshot();
            const filename = `${scenarioName.replace(/\s+/g, '_')}_${Date.now()}.png`;
            const filepath = path.join(this.screenshotDir, filename);
            fs.writeFileSync(filepath, screenshot, 'base64');
            return filepath;
        } catch (error) {
            console.error('Error tomando screenshot:', error);
            return null;
        }
    }

    async saveResult(testCase, scenario, status, error = null, screenshot = null) {
        const result = {
            timestamp: new Date().toISOString(),
            testCase,
            scenario,
            status,
            error,
            screenshot
        };
        this.results.push(result);

        fs.writeFileSync(
            this.resultsFile,
            JSON.stringify(this.results, null, 2)
        );

        const statusIcon = status === 'passed' ? '✅' : '❌';
        console.log(`${statusIcon} ${testCase} - ${scenario}: ${status}`);
        if (error) console.log(`   Error: ${error}`);
    }

    async navigateTo(url) {
        await this.driver.navigate().to(url);

        await this.driver.navigate().refresh();
        await this.driver.wait(until.titleContains('frontend'), 5000);
    }

    async navigateToLoginPage(url) {
        try {
            await this.driver.manage().deleteAllCookies();

            try {
                await this.driver.executeScript('localStorage.clear(); sessionStorage.clear();');
            } catch (e) {
                // Si falla, continuamos - usamos otro método
            }

            await this.driver.navigate().to(url);


            try {
                await this.driver.executeScript('localStorage.clear(); sessionStorage.clear();');
            } catch (e) {
                // Silently fail
            }

            await this.driver.navigate().refresh();

            await new Promise(resolve => setTimeout(resolve, 2000));
            await this.driver.wait(until.titleContains('frontend'), 10000);
        } catch (error) {
            console.error('Error en navigateToLoginPage:', error.message);
            throw error;
        }
    }

    async findElement(locator, timeout = 10000) {
        return this.driver.wait(until.elementLocated(locator), timeout);
    }

    async typeText(locator, text) {
        const element = await this.findElement(locator);
        await element.clear();
        await element.sendKeys(text);
    }

    async clickElement(locator) {
        const element = await this.findElement(locator);
        await element.click();
    }

    async getText(locator) {
        const element = await this.findElement(locator);
        return element.getText();
    }

    async getErrorMessage() {
        try {
            const errorElement = await this.driver.wait(
                until.elementLocated(By.className('error-message')),
                10000
            );
            await this.driver.wait(until.elementIsVisible(errorElement), 5000);
            const text = await errorElement.getText();
            return text;
        } catch (e) {
            return null;
        }
    }

    generateHTMLReport() {
        const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Reporte de Pruebas Automatizadas</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .header { background: #667eea; color: white; padding: 20px; border-radius: 5px; }
        .container { max-width: 1000px; margin: 0 auto; }
        .summary { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin: 20px 0; }
        .summary-card { background: white; padding: 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .summary-card h3 { margin: 0 0 10px 0; }
        .passed { color: #27ae60; font-weight: bold; }
        .failed { color: #e74c3c; font-weight: bold; }
        .test-case { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #667eea; }
        .test-case.passed { border-left-color: #27ae60; }
        .test-case.failed { border-left-color: #e74c3c; }
        .screenshot { margin: 10px 0; max-width: 500px; border: 1px solid #ddd; border-radius: 3px; }
        table { width: 100%; border-collapse: collapse; margin: 10px 0; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f9f9f9; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📊 Reporte de Pruebas Automatizadas</h1>
            <p>Sistema de Gestión de Usuarios - Pruebas con Selenium</p>
        </div>

        <div class="summary">
            <div class="summary-card">
                <h3>Total de Pruebas</h3>
                <p style="font-size: 24px; margin: 0;">${this.results.length}</p>
            </div>
            <div class="summary-card">
                <h3>Exitosas</h3>
                <p class="passed" style="font-size: 24px; margin: 0;">${this.results.filter(r => r.status === 'passed').length}</p>
            </div>
            <div class="summary-card">
                <h3>Fallidas</h3>
                <p class="failed" style="font-size: 24px; margin: 0;">${this.results.filter(r => r.status === 'failed').length}</p>
            </div>
        </div>

        <h2>📋 Resultados Detallados</h2>
        ${this.results.map(r => `
            <div class="test-case ${r.status}">
                <h3>${r.testCase}</h3>
                <p><strong>Escenario:</strong> ${r.scenario}</p>
                <p><strong>Estado:</strong> <span class="${r.status}">${r.status.toUpperCase()}</span></p>
                ${r.error ? `<p><strong>Error:</strong> ${r.error}</p>` : ''}
                ${r.screenshot ? `<p><img src="${r.screenshot}" class="screenshot" alt="Screenshot"></p>` : ''}
                <p><strong>Timestamp:</strong> ${r.timestamp}</p>
            </div>
        `).join('')}
    </div>
</body>
</html>
        `;

        const reportPath = path.join(__dirname, '../reporte.html');
        fs.writeFileSync(reportPath, html);
        console.log(`\n📄 Reporte generado: ${reportPath}`);
    }
}

export default TestBase;
