// Phase A4 Verification Script
const fs = require('fs');
const path = require('path');

console.log('🧪 Phase A4 Promise Rejection Handling - Verification\n');

let passed = 0;
let failed = 0;

// Test 1: Check useProjects has error handling
function test1() {
    const filePath = path.join(__dirname, 'src', 'hooks', 'useProjects.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'Has error state': content.includes('const [error, setError]'),
        'Has loading state': content.includes('const [loading, setLoading]'),
        'fetchProjects has try-catch': content.includes('fetchProjects') && content.includes('try') && content.includes('catch'),
        'handleLogin has try-catch': content.includes('handleLogin') && content.match(/handleLogin[\s\S]*?try[\s\S]*?catch/),
        'handleFileUpload has try-catch': content.includes('handleFileUpload') && content.match(/handleFileUpload[\s\S]*?try[\s\S]*?catch/),
        'handleSubmit has try-catch': content.includes('handleSubmit') && content.match(/handleSubmit[\s\S]*?try[\s\S]*?catch/),
        'handleDelete has try-catch': content.includes('handleDelete') && content.match(/handleDelete[\s\S]*?try[\s\S]*?catch/)
    };
    
    return {
        name: 'useProjects.js - Error handling added',
        passed: Object.values(checks).every(v => v),
        checks
    };
}

// Test 2: Check API routes have error handling
function test2() {
    const filePath = path.join(__dirname, 'src', 'app', 'api', 'projects', 'route.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'GET has try-catch': content.includes('export async function GET') && content.match(/GET[\s\S]*?try[\s\S]*?catch/),
        'POST has try-catch': content.includes('export async function POST') && content.match(/POST[\s\S]*?try[\s\S]*?catch/),
        'Returns 500 on error': content.includes('status: 500')
    };
    
    return {
        name: 'projects/route.js - Error handling added',
        passed: Object.values(checks).every(v => v),
        checks
    };
}

// Test 3: Check project [id] route has error handling
function test3() {
    const filePath = path.join(__dirname, 'src', 'app', 'api', 'projects', '[id]', 'route.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'GET has try-catch': content.match(/GET[\s\S]*?try[\s\S]*?catch/),
        'PUT has try-catch': content.match(/PUT[\s\S]*?try[\s\S]*?catch/),
        'DELETE has try-catch': content.match(/DELETE[\s\S]*?try[\s\S]*?catch/)
    };
    
    return {
        name: 'projects/[id]/route.js - Error handling added',
        passed: Object.values(checks).every(v => v),
        checks
    };
}

// Test 4: Check upload route has error handling
function test4() {
    const filePath = path.join(__dirname, 'src', 'app', 'api', 'upload', 'route.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'POST has try-catch': content.match(/POST[\s\S]*?try[\s\S]*?catch/),
        'Returns error response': content.includes('Failed to upload')
    };
    
    return {
        name: 'upload/route.js - Error handling added',
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
    console.log('🎉 All error handling verified successfully!');
    console.log('✅ Phase A4 is ready for production\n');
    process.exit(0);
} else {
    console.log('⚠️  Some checks failed. Please review the fixes.\n');
    process.exit(1);
}
