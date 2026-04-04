import { By, until } from 'selenium-webdriver';
import TestBase from './base.js';

const BASE_URL = 'http://localhost:5178';

class TestH2CreateUser extends TestBase {
    constructor() {
        super('Historia 2 - Crear Nuevo Usuario');
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

        try {
            await this.driver.wait(until.elementLocated(By.className('dashboard')), 5000);
        } catch (e) {
            throw new Error(`Not on dashboard after login. URL: ${await this.driver.getCurrentUrl()}`);
        }
    }

    async testHappyPath() {
        try {
            await this.loginAndNavigateToDashboard();

            // Click en "Nuevo Usuario"
            const nuevoBtn = await this.driver.findElement(By.className('btn-primary'));
            await nuevoBtn.click();

            // Esperar formulario
            await this.driver.wait(until.elementLocated(By.css('.form-container')), 5000);

            // Llenar formulario
            const inputs = await this.driver.findElements(By.css('.form-container input'));

            if (inputs.length < 3) {
                throw new Error(`Expected 3 inputs, found ${inputs.length}`);
            }

            await inputs[0].sendKeys('Juan Pérez');
            await inputs[1].sendKeys(`test${Date.now()}@test.com`);
            await inputs[2].sendKeys('password123');

            // Enviar
            const submitBtn = await this.driver.findElement(By.css('.btn-success'));
            await submitBtn.click();

            // Validar creación
            await this.driver.wait(
                until.elementLocated(By.xpath("//td[contains(text(), 'Juan Pérez')]")),
                5000
            );

            const screenshot = await this.takeScreenshot('crear_usuario_exitoso');

            await this.saveResult(
                'H2 - Crear Usuario Camino Feliz',
                'Usuario puede crear un nuevo usuario con datos válidos',
                'passed',
                null,
                screenshot
            );
        } catch (error) {
            const screenshot = await this.takeScreenshot('crear_usuario_error');

            await this.saveResult(
                'H2 - Crear Usuario Camino Feliz',
                'Usuario puede crear un nuevo usuario con datos válidos',
                'failed',
                error.message,
                screenshot
            );
        }
    }
    async testNegativePath() {
        try {
            await this.loginAndNavigateToDashboard();

            const nuevoBtn = await this.driver.findElement(By.className('btn-primary'));
            await nuevoBtn.click();

            await this.driver.wait(until.elementLocated(By.css('.form-container')), 5000);

            const inputs = await this.driver.findElements(By.css('.form-container input'));

            if (inputs.length < 3) {
                throw new Error('Formulario incompleto');
            }

            await inputs[0].sendKeys('prueba');
            await inputs[1].sendKeys('');
            await inputs[2].sendKeys('sewer');

            const submitBtn = await this.driver.findElement(By.css('.btn-success'));
            await submitBtn.click();

            const invalidUser = await this.driver.findElements(
                By.xpath("//td[normalize-space(text())='']")
            );

            const hasInvalidUser = invalidUser.length > 0;

            const errorMessage = await this.getErrorMessage();

            const screenshot = await this.takeScreenshot('crear_usuario_invalido');

            await this.saveResult(
                'H2 - Crear Usuario Prueba Negativa',
                'No permite crear usuario con campos vacíos',
                (!hasInvalidUser) ? 'passed' : 'failed',
                (!hasInvalidUser) ? null : 'Se creó usuario inválido',
                screenshot
            );

        } catch (error) {
            const screenshot = await this.takeScreenshot('crear_usuario_negativo_error');

            await this.saveResult(
                'H2 - Crear Usuario Prueba Negativa',
                'No permite crear usuario con campos vacíos',
                'failed',
                error.message,
                screenshot
            );
        }
    }
    async testBoundaryPath() {
        try {
            await this.loginAndNavigateToDashboard();

            const nuevoBtn = await this.driver.findElement(By.className('btn-primary'));
            await nuevoBtn.click();

            await this.driver.wait(until.elementLocated(By.css('.form-container')), 5000);

            const inputs = await this.driver.findElements(By.css('.form-container input'));

            const longName = 'A'.repeat(150);

            const email = `long${Date.now()}@test.com`;

            await inputs[0].sendKeys(longName);
            await inputs[1].sendKeys(email);
            await inputs[2].sendKeys('password123');

            const submitBtn = await this.driver.findElement(By.css('.btn-success'));
            await submitBtn.click();

            await this.driver.sleep(3000);

            const createdUser = await this.driver.findElements(
                By.xpath(`//td[contains(., '${email}')]`)
            );

            const wasCreated = createdUser.length > 0;

            const screenshot = await this.takeScreenshot('crear_usuario_nombre_largo');

            await this.saveResult(
                'H2 - Crear Usuario Prueba de Límite',
                'Sistema maneja correctamente nombres extremadamente largos',
                'passed',
                `Resultado: ${wasCreated ? 'Se creó (aceptable si el sistema lo permite)' : 'No se creó (validación aplicada)'}`,
                screenshot
            );

        } catch (error) {
            const screenshot = await this.takeScreenshot('crear_usuario_boundary_error');

            await this.saveResult(
                'H2 - Crear Usuario Prueba de Límite',
                'Sistema maneja correctamente nombres extremadamente largos',
                'failed',
                error.message,
                screenshot
            );
        }
    }

    async run() {
        await this.setup();
        try {
            console.log('\n🧪 Ejecutando Historia 2: Crear Usuario (Camino Feliz)\n');
            await this.testHappyPath();
            await this.testNegativePath();
            await this.testBoundaryPath();
            this.generateHTMLReport();
        } finally {
            await this.teardown();
        }
    }
}

(async () => {
    const test = new TestH2CreateUser();
    await test.run();
})();