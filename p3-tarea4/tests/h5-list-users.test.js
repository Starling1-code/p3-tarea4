import { By, until } from 'selenium-webdriver';
import TestBase from './base.js';

const BASE_URL = 'http://localhost:5178';

class TestH5ListUsers extends TestBase {
    constructor() {
        super('Historia 5 - Listar Todos los Usuarios');
    }

    async loginAndNavigateToDashboard() {
        await this.navigateToLoginPage(BASE_URL);

        await this.driver.sleep(2000);

        const emailInput = await this.driver.findElement(By.css('input[type="email"]'));
        const passwordInput = await this.driver.findElement(By.css('input[type="password"]'));

        await emailInput.sendKeys('usuario@test.com');
        await passwordInput.sendKeys('123456789');

        const loginBtn = await this.driver.findElement(By.css('button'));
        await loginBtn.click();

        await this.driver.sleep(4000);

        await this.driver.wait(until.elementLocated(By.className('dashboard')), 5000);
    }

    async testHappyPath() {
        try {
            await this.loginAndNavigateToDashboard();

            // Esperar tabla
            await this.driver.wait(until.elementLocated(By.css('.users-table')), 5000);

            // Validar que existe
            const table = await this.driver.findElement(By.css('.users-table'));

            // Validar headers
            const headers = await this.driver.findElements(By.css('.users-table thead th'));

            // Validar filas
            const rows = await this.driver.findElements(By.css('.users-table tbody tr'));

            const isValid = table && headers.length > 0 && rows.length > 0;

            const screenshot = await this.takeScreenshot('listar_usuarios_exitoso');

            await this.saveResult(
                'H5 - Listar Usuarios Camino Feliz',
                'Dashboard muestra tabla con usuarios correctamente',
                isValid ? 'passed' : 'failed',
                isValid ? null : `Headers: ${headers.length}, Rows: ${rows.length}`,
                screenshot
            );

        } catch (error) {
            const screenshot = await this.takeScreenshot('listar_usuarios_error');

            await this.saveResult(
                'H5 - Listar Usuarios Camino Feliz',
                'Dashboard muestra tabla con usuarios correctamente',
                'failed',
                error.message,
                screenshot
            );
        }
    }

    async run() {
        await this.setup();
        try {
            console.log('\n Ejecutando Historia 5: Listar Usuarios\n');
            await this.testHappyPath();
            this.generateHTMLReport();
        } finally {
            await this.teardown();
        }
    }
}

(async () => {
    const test = new TestH5ListUsers();
    await test.run();
})();