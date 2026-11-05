   const fs = require('fs');
   fs.mkdirSync('build', { recursive: true });
   fs.copyFileSync('src/index.html', 'build/index.html');
   console.log('Build complete');