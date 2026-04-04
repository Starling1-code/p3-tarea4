import { By } from 'selenium-webdriver';
import TestBase from './base.js';

const BASE_URL = 'http://localhost:5178';

class TestH1Login extends TestBase {
    constructor() {
        super('Historia 1 - Autenticación de Usuario');
    }
    async testBoundaryPath() {
        try {
            await this.navigateToLoginPage(BASE_URL);

            const longPassword = 'a'.repeat(200);

            await this.typeText(By.css('input[type="email"]'), 'usuario@test.com');
            await this.typeText(By.css('input[type="password"]'), longPassword);

            await this.clickElement(By.css('button'));

            await this.driver.sleep(3000);

            const dashboard = await this.driver.findElements(By.className('dashboard'));

            const isLogged = dashboard.length > 0;

            const screenshot = await this.takeScreenshot('login_password_largo');

            await this.saveResult(
                'H1 - Login Prueba negativa',
                'Usuario no puede iniciar sesión con credenciales inválidas',
                (!isLogged) ? 'passed' : 'failed',
                (!isLogged) ? null : 'Permitió login con password',
                screenshot
            );

        } catch (error) {
            const screenshot = await this.takeScreenshot('login_boundary_error');

            await this.saveResult(
                'H1 - Login Prueba Negativa',
                'Usuario no puede iniciar sesión con credenciales inválidas',
                'failed',
                error.message,
                screenshot
            );
        }
    }
    async testLimitsPath() {
        try {
            console.log('\n Ejecutando H1 - Login Prueba de Límites\n');

            await this.navigateToLoginPage(BASE_URL);

            // ====== CASO 1: CAMPOS VACÍOS ======
            await this.clickElement(By.css('button'));
            await this.driver.sleep(2000);

            let dashboard = await this.driver.findElements(By.className('dashboard'));
            let isLoggedEmpty = dashboard.length > 0;

            const screenshotEmpty = await this.takeScreenshot('login_campos_vacios');

            await this.saveResult(
                'H1 - Login Prueba de Límites (Campos Vacíos)',
                'No debe permitir login con campos vacíos',
                (!isLoggedEmpty) ? 'passed' : 'failed',
                (!isLoggedEmpty) ? null : 'Permitió login con campos vacíos',
                screenshotEmpty
            );

            // ====== CASO 2: DATOS MUY CORTOS ======
            await this.navigateToLoginPage(BASE_URL);

            await this.typeText(By.css('input[type="email"]'), 'a@a');
            await this.typeText(By.css('input[type="password"]'), '1');

            await this.clickElement(By.css('button'));
            await this.driver.sleep(2000);

            dashboard = await this.driver.findElements(By.className('dashboard'));
            let isLoggedShort = dashboard.length > 0;

            const screenshotShort = await this.takeScreenshot('login_datos_cortos');

            await this.saveResult(
                'H1 - Login Prueba de Límites (Datos Cortos)',
                'No debe permitir login con datos demasiado cortos',
                (!isLoggedShort) ? 'passed' : 'failed',
                (!isLoggedShort) ? null : 'Permitió login con datos cortos',
                screenshotShort
            );

            // ====== CASO 3: DATOS MUY LARGOS ======
            await this.navigateToLoginPage(BASE_URL);

            const longEmail = 'a'.repeat(100) + '@test.com';
            const longPassword = 'a'.repeat(300);

            await this.typeText(By.css('input[type="email"]'), longEmail);
            await this.typeText(By.css('input[type="password"]'), longPassword);

            await this.clickElement(By.css('button'));
            await this.driver.sleep(2000);

            dashboard = await this.driver.findElements(By.className('dashboard'));
            let isLoggedLong = dashboard.length > 0;

            const screenshotLong = await this.takeScreenshot('login_datos_largos');

            await this.saveResult(
                'H1 - Login Prueba de Límites (Datos Largos)',
                'No debe permitir login con datos demasiado largos',
                (!isLoggedLong) ? 'passed' : 'failed',
                (!isLoggedLong) ? null : 'Permitió login con datos largos',
                screenshotLong
            );

        } catch (error) {
            const screenshot = await this.takeScreenshot('login_limits_error');

            await this.saveResult(
                'H1 - Login Prueba de Límites',
                'Error en pruebas de límites',
                'failed',
                error.message,
                screenshot
            );
        }
    }
    async run() {
        await this.setup();
        try {
            console.log('\n Ejecutando Historia 1: Autenticación de Usuario\n');

            await this.navigateToLoginPage(BASE_URL);
            await this.typeText(By.css('input[type="email"]'), 'usuario@test.com');
            await this.typeText(By.css('input[type="password"]'), '123456789');
            await this.clickElement(By.css('button'));
            await this.findElement(By.className('dashboard'));

            const screenshot = await this.takeScreenshot('login_exitoso');

            await this.saveResult(
                'H1 - Login Camino Feliz',
                'Usuario puede iniciar sesión con credenciales válidas',
                'passed',
                null,
                screenshot
            );

            await this.testBoundaryPath();
            await this.testLimitsPath();

            this.generateHTMLReport();

        } finally {
            await this.teardown();
        }
    }
}

(async () => {
    const test = new TestH1Login();
    await test.run();
})();
