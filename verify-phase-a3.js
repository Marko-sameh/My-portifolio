// Phase A3 Verification Script
const fs = require('fs');
const path = require('path');

console.log('🧪 Phase A3 API Security - Verification\n');

let passed = 0;
let failed = 0;

// Test 1: Check API_KEY removed from useProjects
function test1() {
    const filePath = path.join(__dirname, 'src', 'hooks', 'useProjects.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'No NEXT_PUBLIC_API_KEY': !content.includes('NEXT_PUBLIC_API_KEY'),
        'No API_KEY constant': !content.includes('const API_KEY'),
        'No X-API-Key header in fetch': !content.includes('X-API-Key'),
        'Uses Bearer token only': content.includes('Authorization: `Bearer ${authToken}`')
    };
    
    return {
        name: 'useProjects.js - API key removed',
        passed: Object.values(checks).every(v => v),
        checks
    };
}

// Test 2: Check auth.js updated
function test2() {
    const filePath = path.join(__dirname, 'src', 'lib', 'auth.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'No API key check': !content.includes('x-api-key'),
        'No NEXT_PUBLIC check': !content.includes('NEXT_PUBLIC'),
        'Bearer token only': content.includes('Bearer')
    };
    
    return {
        name: 'auth.js - API key check removed',
        passed: Object.values(checks).every(v => v),
        checks
    };
}

// Test 3: Check .env.local cleaned
function test3() {
    const filePath = path.join(__dirname, '.env.local');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'No NEXT_PUBLIC_API_KEY': !content.includes('NEXT_PUBLIC_API_KEY'),
        'No API_KEY': !content.includes('API_KEY='),
        'Has ADMIN_PASSWORD': content.includes('ADMIN_PASSWORD'),
        'Has API_SECRET_KEY': content.includes('API_SECRET_KEY')
    };
    
    return {
        name: '.env.local - Exposed keys removed',
        passed: Object.values(checks).every(v => v),
        checks
    };
}

// Test 4: Check API routes secure
function test4() {
    const routePath = path.join(__dirname, 'src', 'app', 'api', 'projects', 'route.js');
    const content = fs.readFileSync(routePath, 'utf8');
    
    const checks = {
        'GET is public': content.includes('export async function GET()'),
        'POST uses checkAuth': content.includes('POST') && content.includes('checkAuth'),
        'No API key in route': !content.includes('NEXT_PUBLIC')
    };
    
    return {
        name: 'API routes - Properly secured',
        passed: Object.values(checks).every(v => v),
        checks
    };
}

// Run tests
const results = [test1(), test2(), test3(), test4()];

// Display results
results.forEach((result, index) => {
    const status = result.passed ? '✅ PASS' : '❌ FAIL';
    console.log(`Test ${index + 1}: ${result.name} ${status}`);
    
    Object.entries(result.checks).forEach(([check, passed]) => {
        const checkStatus = passed ? '  ✅' : '  ❌';
        console.log(`${checkStatus} ${check}`);
    });
    
    console.log('');
    
    if (result.passed) {
        passed++;
    } else {
        failed++;
    }
});

// Summary
console.log('═'.repeat(50));
console.log(`\n📊 Test Summary:`);
console.log(`   Total Tests: ${results.length}`);
console.log(`   ✅ Passed: ${passed}`);
console.log(`   ❌ Failed: ${failed}`);
console.log(`   Success Rate: ${((passed / results.length) * 100).toFixed(0)}%\n`);

if (failed === 0) {
    console.log('🎉 All API security fixes verified successfully!');
    console.log('✅ Phase A3 is ready for production\n');
    process.exit(0);
} else {
    console.log('⚠️  Some checks failed. Please review the fixes.\n');
    process.exit(1);
}
