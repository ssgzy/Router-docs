/**
 * Prebuild Script
 * Generates changelog before build
 */

// Code Router: changelog auto-generation from upstream GitHub Releases is
// disabled — the docs ship a placeholder changelog (待补) and the build must
// not fetch the network or overwrite that placeholder.
// import { generateChangelog } from './build-changelog';

async function prebuild() {
  console.log('═══════════════════════════════════════════════');
  console.log('🚀 Starting prebuild process...');
  console.log('═══════════════════════════════════════════════\n');

  const startTime = Date.now();

  try {
    // await generateChangelog();
    console.log('ℹ Changelog auto-generation disabled (placeholder in use).');

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log('═══════════════════════════════════════════════');
    console.log(`✅ Prebuild completed! Duration: ${duration}s`);
    console.log('═══════════════════════════════════════════════\n');
  } catch (error) {
    console.error('❌ Prebuild failed:', error);
    // Don't exit process, let the build continue
    console.log('⚠ Build will continue but may use old or missing data\n');
  }
}

// Execute prebuild
prebuild();
