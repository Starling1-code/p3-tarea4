import { execSync } from 'child_process';

const tests = [
    'h1-login.test.js',
    'h2-create-user.test.js',
    'h3-edit-user.test.js',
    'h4-delete-user.test.js',
    'h5-list-users.test.js'
];

for (const test of tests) {
    console.log(`\n🧪 Ejecutando ${test}`);

    execSync('cd ../backend && npx ts-node seed.ts', { stdio: 'inherit' });
    execSync(`node ${test}`, { stdio: 'inherit' });
}