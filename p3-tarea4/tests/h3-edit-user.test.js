import { By, until } from 'selenium-webdriver';
import TestBase from './base.js';

const BASE_URL = 'http://localhost:5178';

class TestH3EditUser extends TestBase {
    constructor() {
        super('Historia 3 - Editar Usuario Existente');
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

            // Esperar tabla
            await this.driver.wait(until.elementLocated(By.css('.users-table')), 5000);

            // Click en editar
            const editBtn = await this.driver.wait(
                until.elementLocated(By.className('btn-edit')),
                5000
            );

            await this.driver.wait(until.elementIsVisible(editBtn), 5000);
            await editBtn.click();

            // Esperar formulario visible
            const form = await this.driver.wait(
                until.elementLocated(By.css('.form-container')),
                5000
            );

            await this.driver.wait(until.elementIsVisible(form), 5000);

            // Validar modo edición
            const title = await this.driver.findElement(By.css('.form-container h3')).getText();
            const isEditForm = title.includes('Editar');

            // Esperar input correctamente
            const input = await this.driver.wait(
                until.elementLocated(By.css('.form-container input')),
                5000
            );

            await this.driver.wait(until.elementIsVisible(input), 5000);
            await this.driver.wait(until.elementIsEnabled(input), 5000);

            // 🔥 IMPORTANTE: scroll al elemento
            await this.driver.executeScript("arguments[0].scrollIntoView(true);", input);

            // Editar
            await input.clear();
            await input.sendKeys('Nombre Actualizado');

            // Guardar
            const submitBtn = await this.driver.findElement(By.css('.btn-success'));
            await this.driver.wait(until.elementIsEnabled(submitBtn), 5000);
            await submitBtn.click();

            // Validar actualización
            await this.driver.wait(
                until.elementLocated(By.xpath("//td[contains(., 'Nombre Actualizado')]")),
                7000
            );

            const screenshot = await this.takeScreenshot('editar_usuario_exitoso');

            await this.saveResult(
                'H3 - Editar Usuario Camino Feliz',
                'Usuario puede editar datos de usuario existente',
                isEditForm ? 'passed' : 'failed',
                isEditForm ? null : 'No se detectó modo edición',
                screenshot
            );

        } catch (error) {
            const screenshot = await this.takeScreenshot('editar_usuario_error');

            await this.saveResult(
                'H3 - Editar Usuario Camino Feliz',
                'Usuario puede editar datos de usuario existente',
                'failed',
                error.message,
                screenshot
            );
        }
    }
    async testLimitsPath() {
        try {
            console.log('\n Ejecutando H3 - Editar Usuario Prueba de Límites\n');

            await this.loginAndNavigateToDashboard();

            // Esperar tabla
            await this.driver.wait(until.elementLocated(By.css('.users-table')), 5000);

            // Click editar
            const editBtn = await this.driver.wait(
                until.elementLocated(By.className('btn-edit')),
                5000
            );

            await this.driver.wait(until.elementIsVisible(editBtn), 5000);
            await editBtn.click();

            // Esperar formulario
            const input = await this.driver.wait(
                until.elementLocated(By.css('.form-container input')),
                5000
            );

            await this.driver.wait(until.elementIsVisible(input), 5000);

            // 🔥 CASO: DATO MUY LARGO
            const longText = 'a'.repeat(300);

            await input.clear();
            await input.sendKeys(longText);

            const submitBtn = await this.driver.findElement(By.css('.btn-success'));
            await submitBtn.click();

            await this.driver.sleep(3000);

            // Validar que NO se guardó
            const updated = await this.driver.findElements(
                By.xpath(`//td[contains(., '${longText}')]`)
            );

            const isUpdated = updated.length > 0;

            const screenshot = await this.takeScreenshot('editar_usuario_limites');

            await this.saveResult(
                'H3 - Editar Usuario Prueba de Límites',
                'Sistema valida datos largos o inválidos',
                (!isUpdated) ? 'passed' : 'failed',
                (!isUpdated) ? null : 'Permitió guardar datos inválidos/largos',
                screenshot
            );

        } catch (error) {
            const screenshot = await this.takeScreenshot('editar_usuario_limites_error');

            await this.saveResult(
                'H3 - Editar Usuario Prueba de Límites',
                'Sistema valida datos largos o inválidos',
                'failed',
                error.message,
                screenshot
            );
        }
    }
    async testCreateUserNegative() {
        try {
            console.log('\n Ejecutando H2 - Crear Usuario Prueba Negativa\n');

            await this.loginAndNavigateToDashboard();

            // Ir a crear usuario (ajusta selector si es diferente)
            const createBtn = await this.driver.wait(
                until.elementLocated(By.className('btn-create')),
                5000
            );

            await this.driver.wait(until.elementIsVisible(createBtn), 5000);
            await createBtn.click();

            // Esperar formulario
            await this.driver.wait(
                until.elementLocated(By.css('.form-container')),
                5000
            );

            // 🔥 NO llenar nada
            const submitBtn = await this.driver.findElement(By.css('.btn-success'));
            await submitBtn.click();

            await this.driver.sleep(3000);

            // Validar que NO se creó usuario
            const users = await this.driver.findElements(
                By.xpath("//td[contains(., 'Nuevo Usuario')]")
            );

            const userCreated = users.length > 0;

            const screenshot = await this.takeScreenshot('crear_usuario_negativo');

            await this.saveResult(
                'H2 - Crear Usuario Prueba Negativa',
                'No permite crear usuario sin datos',
                (!userCreated) ? 'passed' : 'failed',
                (!userCreated) ? null : 'Permitió crear usuario vacío',
                screenshot
            );

        } catch (error) {
            const screenshot = await this.takeScreenshot('crear_usuario_negativo_error');

            await this.saveResult(
                'H2 - Crear Usuario Prueba Negativa',
                'No permite crear usuario sin datos',
                'failed',
                error.message,
                screenshot
            );
        }
    }

    async run() {
        await this.setup();
        try {
            console.log('\n🧪 Ejecutando Historia 3: Editar Usuario (Camino Feliz)\n');
            await this.testHappyPath();
            await this.testLimitsPath();
            await this.testCreateUserNegative();
            this.generateHTMLReport();
        } finally {
            await this.teardown();
        }
    }
}

(async () => {
    const test = new TestH3EditUser();
    await test.run();
})();