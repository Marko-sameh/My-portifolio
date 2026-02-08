// Phase A2 Verification Script
const fs = require('fs');
const path = require('path');

console.log('🧪 Phase A2 Error Boundaries - Verification\n');

let passed = 0;
let failed = 0;

// Test 1: Check PageErrorBoundary exists
function test1() {
    const filePath = path.join(__dirname, 'src', 'components', 'ErrorBoundary', 'PageErrorBoundary.jsx');
    const exists = fs.existsSync(filePath);
    const content = exists ? fs.readFileSync(filePath, 'utf8') : '';
    
    const checks = {
        'File exists': exists,
        'Has getDerivedStateFromError': content.includes('getDerivedStateFromError'),
        'Has componentDidCatch': content.includes('componentDidCatch'),
        'Has fallback UI': content.includes('Page Error')
    };
    
    return {
        name: 'PageErrorBoundary component',
        passed: Object.values(checks).every(v => v),
        checks
    };
}

// Test 2: Check FeatureErrorBoundary exists
function test2() {
    const filePath = path.join(__dirname, 'src', 'components', 'ErrorBoundary', 'FeatureErrorBoundary.jsx');
    const exists = fs.existsSync(filePath);
    const content = exists ? fs.readFileSync(filePath, 'utf8') : '';
    
    const checks = {
        'File exists': exists,
        'Has getDerivedStateFromError': content.includes('getDerivedStateFromError'),
        'Has componentDidCatch': content.includes('componentDidCatch'),
        'Returns null on error': content.includes('return null')
    };
    
    return {
        name: 'FeatureErrorBoundary component',
        passed: Object.values(checks).every(v => v),
        checks
    };
}

// Test 3: Check pages wrapped
function test3() {
    const pages = [
        'src/app/Identity/page.jsx',
        'src/app/Mastery/page.jsx',
        'src/app/Builds/page.jsx',
        'src/app/Core/page.jsx',
        'src/app/beyond/page.jsx',
        'src/app/Signal/page.jsx'
    ];
    
    const checks = {};
    pages.forEach(page => {
        const filePath = path.join(__dirname, page);
        const content = fs.readFileSync(filePath, 'utf8');
        const pageName = page.split('/')[2];
        checks[pageName] = content.includes('PageErrorBoundary');
    });
    
    return {
        name: 'Pages wrapped with error boundaries',
        passed: Object.values(checks).every(v => v),
        checks
    };
}

// Test 4: Check AIEmotionSystem wrapped
function test4() {
    const filePath = path.join(__dirname, 'src', 'app', 'layout.jsx');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'FeatureErrorBoundary imported': content.includes('FeatureErrorBoundary'),
        'AIEmotionSystem wrapped': content.includes('<FeatureErrorBoundary>') && content.includes('<AIEmotionSystem')
    };
    
    return {
        name: 'AIEmotionSystem wrapped in layout',
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
    console.log('🎉 All error boundaries verified successfully!');
    console.log('✅ Phase A2 is ready for production\n');
    process.exit(0);
} else {
    console.log('⚠️  Some checks failed. Please review the fixes.\n');
    process.exit(1);
}
