   const fs = require('fs');
   const html = fs.readFileSync('src/index.html', 'utf8');
   if (!html.includes('<h1>')) {
     console.error('FAIL: index.html must contain an <h1>');
     process.exit(1);
   }
   console.log('PASS: index.html has an <h1>');