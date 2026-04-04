import { By, until } from 'selenium-webdriver';
import TestBase from './base.js';

const BASE_URL = 'http://localhost:5174';

class TestH4DeleteUser extends TestBase {
    constructor() {
        super('Historia 4 - Eliminar Usuario');
    }

    async loginAndNavigateToDashboard() {
        // Reseteamos completamente el estado limpiando localStorage
        await this.navigateToLoginPage(BASE_URL);

        // Wait for login form to be ready
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Fill login form
        const emailInputs = await this.driver.findElements(By.css('input[type="email"]'));
        if (emailInputs.length === 0) throw new Error('Email input not found');

        await emailInputs[0].sendKeys('usuario@test.com');

        const passwordInputs = await this.driver.findElements(By.css('input[type="password"]'));
        if (passwordInputs.length === 0) throw new Error('Password input not found');

        await passwordInputs[0].sendKeys('123456789');

        // Click login button
        const buttons = await this.driver.findElements(By.css('button'));
        if (buttons.length === 0) throw new Error('Button not found');

        await buttons[0].click();

        // Wait for navigation to dashboard
        await new Promise(resolve => setTimeout(resolve, 4000));

        // If redirected to /dashboard, go back to root which will show dashboard
        const currentUrl = await this.driver.getCurrentUrl();
        if (currentUrl.includes('/dashboard')) {
            await this.driver.navigate().to(BASE_URL);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        // Verify we're on dashboard
        try {
            await this.driver.wait(until.elementLocated(By.className('dashboard')), 5000);
        } catch (e) {
            throw new Error(`Not on dashboard after login. Current URL: ${await this.driver.getCurrentUrl()}`);
        }
    }

    async testHappyPath() {
        try {
            await this.loginAndNavigateToDashboard();

            // Primero crear un usuario para garantizar que hay alguien para eliminar
            const nuevoBtn = await this.driver.findElements(By.className('btn-primary'));
            await nuevoBtn[0].click();

            // Esperar a que el formulario se renderice
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Crear un usuario nuevo con email único
            const userName = 'Usuario Para Eliminar';
            const emailToDelete = `deleteme${Date.now()}@test.com`;
            const inputs = await this.driver.findElements(By.css('.form-container input'));
            await inputs[0].sendKeys(userName);
            await inputs[1].sendKeys(emailToDelete);
            await inputs[2].sendKeys('password123');

            const submitBtn = await this.driver.findElement(By.css('.btn-success'));
            await submitBtn.click();

            // Esperar a que el usuario aparezca en la tabla
            try {
                await this.driver.wait(until.elementLocated(By.xpath(`//td[contains(text(), '${userName}')]`)), 5000);
            } catch (e) {
                throw new Error(`Usuario no apareció en la tabla después de ${3000}ms`);
            }

            // Esperar a que la tabla se cargue
            await this.findElement(By.css('.users-table'));

            // Encontrar y eliminar específicamente el usuario que creamos por email
            const rows = await this.driver.findElements(By.css('.users-table tbody tr'));
            if (rows.length === 0) {
                throw new Error('No hay usuarios para eliminar');
            }

            let targetRow = null;
            for (const row of rows) {
                const cells = await row.findElements(By.css('td'));
                if (cells.length < 3) continue; // Skip rows that don't have enough columns

                const name = await cells[1].getText(); // Name is in second column (after ID)
                const email = await cells[2].getText(); // Email is in third column

                if (email === emailToDelete) {
                    targetRow = row;
                    break;
                }
            }

            if (!targetRow) {
                throw new Error(`No se encontró el usuario con email ${emailToDelete}`);
            }

            // Hacer click en botón Eliminar
            const deleteBtn = await targetRow.findElement(By.className('btn-delete'));
            await deleteBtn.click();

            // Manejar el alert de confirmación
            await this.driver.wait(until.alertIsPresent(), 5000);
            const alert = await this.driver.switchTo().alert();
            await alert.accept();

            // Esperar a que se actualice la tabla
            await this.driver.sleep(1000);

            // Verificar que el usuario ya no está en la tabla
            const rowsAfter = await this.driver.findElements(By.xpath(`//table//td[contains(text(), '${emailToDelete}')]`));

            const screenshot = await this.takeScreenshot('eliminar_usuario_exitoso');
            await this.saveResult(
                'H4 - Eliminar Usuario Camino Feliz',
                'Usuario puede eliminar un usuario existente con confirmación',
                rowsAfter.length === 0 ? 'passed' : 'failed',
                rowsAfter.length === 0 ? null : 'El usuario no fue eliminado',
                screenshot
            );
        } catch (error) {
            const screenshot = await this.takeScreenshot('eliminar_usuario_error');
            await this.saveResult(
                'H4 - Eliminar Usuario Camino Feliz',
                'Usuario puede eliminar un usuario existente con confirmación',
                'failed',
                error.message,
                screenshot
            );
        }
    }

    async testNegativePath() {
        try {
            await this.loginAndNavigateToDashboard();

            // Primero crear un usuario para garantizar que hay alguien para intentar eliminar
            const nuevoBtn = await this.driver.findElements(By.className('btn-primary'));
            await nuevoBtn[0].click();

            // Esperar a que el formulario se renderice
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Crear un usuario nuevo con email único
            const userName = 'Usuario Para No Eliminar';
            const emailToNotDelete = `nodeleme${Date.now()}@test.com`;
            const inputs = await this.driver.findElements(By.css('.form-container input'));
            await inputs[0].sendKeys(userName);
            await inputs[1].sendKeys(emailToNotDelete);
            await inputs[2].sendKeys('password123');

            const submitBtn = await this.driver.findElement(By.css('.btn-success'));
            await submitBtn.click();

            // Esperar a que el usuario aparezca en la tabla
            try {
                await this.driver.wait(until.elementLocated(By.xpath(`//td[contains(text(), '${userName}')]`)), 5000);
            } catch (e) {
                throw new Error(`Usuario no apareció en la tabla`);
            }

            // Esperar a que la tabla se cargue
            await this.findElement(By.css('.users-table'));

            // Encontrar específicamente el usuario que creamos por email
            const rows = await this.driver.findElements(By.css('.users-table tbody tr'));
            if (rows.length === 0) {
                throw new Error('No hay usuarios para probar');
            }

            let targetRow = null;
            for (const row of rows) {
                const cells = await row.findElements(By.css('td'));
                if (cells.length < 3) continue;

                const name = await cells[1].getText(); // Name is in second column
                const email = await cells[2].getText(); // Email is in third column

                if (email === emailToNotDelete) {
                    targetRow = row;
                    break;
                }
            }

            if (!targetRow) {
                throw new Error(`No se encontró el usuario con email ${emailToNotDelete}`);
            }

            // Hacer click en botón Eliminar
            const deleteBtn = await targetRow.findElement(By.className('btn-delete'));
            await deleteBtn.click();

            // Manejar el alert de confirmación - Cancelar
            await this.driver.wait(until.alertIsPresent(), 5000);
            const alert = await this.driver.switchTo().alert();
            await alert.dismiss();

            // Esperar un poco
            await this.driver.sleep(500);

            // Verificar que el usuario sigue en la tabla
            const rowsAfter = await this.driver.findElements(By.xpath(`//table//td[contains(text(), '${emailToNotDelete}')]`));

            const screenshot = await this.takeScreenshot('eliminar_cancelado');
            await this.saveResult(
                'H4 - Eliminar Usuario Prueba Negativa',
                'Sistema no elimina si usuario cancela confirmación',
                rowsAfter.length > 0 ? 'passed' : 'failed',
                rowsAfter.length > 0 ? null : 'El usuario fue eliminado a pesar de cancelar',
                screenshot
            );
        } catch (error) {
            const screenshot = await this.takeScreenshot('eliminar_negativa_error');
            await this.saveResult(
                'H4 - Eliminar Usuario Prueba Negativa',
                'Sistema no elimina si usuario cancela confirmación',
                'failed',
                error.message,
                screenshot
            );
        }
    }

    async testBoundaryPath() {
        try {
            await this.loginAndNavigateToDashboard();

            // Primero crear un usuario para garantizar que hay alguien para eliminar
            const nuevoBtn = await this.driver.findElements(By.className('btn-primary'));
            await nuevoBtn[0].click();

            // Esperar a que el formulario se renderice
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Crear un usuario nuevo con email único
            const userName = 'Usuario Para Contar';
            const emailToCounter = `counter${Date.now()}@test.com`;
            const inputs = await this.driver.findElements(By.css('.form-container input'));
            await inputs[0].sendKeys(userName);
            await inputs[1].sendKeys(emailToCounter);
            await inputs[2].sendKeys('password123');

            const submitBtn = await this.driver.findElement(By.css('.btn-success'));
            await submitBtn.click();

            // Esperar a que el usuario aparezca en la tabla
            try {
                await this.driver.wait(until.elementLocated(By.xpath(`//td[contains(text(), '${userName}')]`)), 5000);
            } catch (e) {
                throw new Error(`Usuario no apareció en la tabla`);
            }

            // Esperar a que la tabla se cargue
            await this.findElement(By.css('.users-table'));

            // Contar usuarios en la tabla antes de eliminar
            const rowsBefore = await this.driver.findElements(By.css('.users-table tbody tr'));
            const countBefore = rowsBefore.length;

            if (countBefore === 0) {
                throw new Error('No hay usuarios para probar');
            }

            // Encontrar específicamente el usuario que creamos por email
            let targetRow = null;
            for (const row of rowsBefore) {
                const cells = await row.findElements(By.css('td'));
                if (cells.length < 3) continue;

                const email = await cells[2].getText(); // Email is in third column

                if (email === emailToCounter) {
                    targetRow = row;
                    break;
                }
            }

            if (!targetRow) {
                throw new Error(`No se encontró el usuario con email ${emailToCounter}`);
            }

            // Sólo eliminamos el usuario que creamos
            const deleteBtn = await targetRow.findElement(By.className('btn-delete'));
            await deleteBtn.click();

            await this.driver.wait(until.alertIsPresent(), 5000);
            const alert = await this.driver.switchTo().alert();
            await alert.accept();
            await this.driver.sleep(1000);

            const rowsAfter = await this.driver.findElements(By.css('.users-table tbody tr'));
            const countAfter = rowsAfter.length;

            const screenshot = await this.takeScreenshot('eliminar_limite');
            await this.saveResult(
                'H4 - Eliminar Usuario Prueba de Límites',
                'Sistema actualiza correctamente el contador al eliminar',
                countAfter === countBefore - 1 ? 'passed' : 'failed',
                countAfter === countBefore - 1 ? null : `Esperaba ${countBefore - 1}, obtuvo ${countAfter}`,
                screenshot
            );
        } catch (error) {
            const screenshot = await this.takeScreenshot('eliminar_limite_error');
            await this.saveResult(
                'H4 - Eliminar Usuario Prueba de Límites',
                'Sistema actualiza correctamente el contador al eliminar',
                'failed',
                error.message,
                screenshot
            );
        }
    }

    async run() {
        await this.setup();
        try {
            console.log('\n🧪 Ejecutando Historia 4: Eliminar Usuario\n');

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
    const test = new TestH4DeleteUser();
    await test.run();
})();
