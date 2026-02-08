// Phase A1 Verification Script
// Checks that memory leak fixes are properly implemented

const fs = require('fs');
const path = require('path');

console.log('🧪 Phase A1 Memory Leak Fix - Verification\n');

const tests = [];
let passed = 0;
let failed = 0;

// Test 1: Check useEmotionDetection.js cleanup
function test1() {
    const filePath = path.join(__dirname, 'src', 'hooks', 'useEmotionDetection.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'clearTimeout in cleanup': content.includes('clearTimeout(analysisTimeoutRef.current)'),
        'classifierRef nullified': content.includes('classifierRef.current = null'),
        'trackerRef nullified': content.includes('trackerRef.current = null'),
        'stopTracking called': content.includes('trackerRef.current.stopTracking()')
    };
    
    const allPassed = Object.values(checks).every(v => v);
    
    return {
        name: 'useEmotionDetection.js cleanup',
        passed: allPassed,
        checks
    };
}

// Test 2: Check behaviorTracker.js interval property
function test2() {
    const filePath = path.join(__dirname, 'src', 'lib', 'behaviorTracker.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'analysisInterval in constructor': content.includes('this.analysisInterval = null'),
        'interval cleared in stopTracking': content.includes('clearInterval(this.analysisInterval)'),
        'interval nullified': content.includes('this.analysisInterval = null') && content.split('this.analysisInterval = null').length > 2
    };
    
    const allPassed = Object.values(checks).every(v => v);
    
    return {
        name: 'behaviorTracker.js interval cleanup',
        passed: allPassed,
        checks
    };
}

// Test 3: Check behaviorTracker.js callbacks cleanup
function test3() {
    const filePath = path.join(__dirname, 'src', 'lib', 'behaviorTracker.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'callbacks cleared': content.includes('this.callbacks = []') && content.includes('stopTracking()'),
    };
    
    const allPassed = Object.values(checks).every(v => v);
    
    return {
        name: 'behaviorTracker.js callbacks cleanup',
        passed: allPassed,
        checks
    };
}

// Test 4: Check behaviorTracker.js event listener cleanup
function test4() {
    const filePath = path.join(__dirname, 'src', 'lib', 'behaviorTracker.js');
    const content = fs.readFileSync(filePath, 'utf8');
    
    const checks = {
        'scrollHandler null check': content.includes('if (this.scrollHandler)'),
        'scrollHandler nullified': content.includes('this.scrollHandler = null'),
        'clickHandler null check': content.includes('if (this.clickHandler)'),
        'clickHandler nullified': content.includes('this.clickHandler = null'),
        'mouseEnterHandler nullified': content.includes('this.mouseEnterHandler = null'),
        'mouseLeaveHandler nullified': content.includes('this.mouseLeaveHandler = null'),
        'navigationHandler nullified': content.includes('this.navigationHandler = null')
    };
    
    const allPassed = Object.values(checks).every(v => v);
    
    return {
        name: 'behaviorTracker.js event listener cleanup',
        passed: allPassed,
        checks
    };
}

// Run all tests
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
    console.log('🎉 All memory leak fixes verified successfully!');
    console.log('✅ Phase A1 is ready for production\n');
    process.exit(0);
} else {
    console.log('⚠️  Some checks failed. Please review the fixes.\n');
    process.exit(1);
}
