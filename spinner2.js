const spinnerChars = ['|', '/', '-', '\\'];
let index = 0;

const spinner = setInterval(() => {
  const delay = [100, 300, 500, 700];
  const char = spinnerChars[index];
  
  process.stdout.write(`\r${char}   `);
  
  index = (index + 1) % spinnerChars.length;
  
  setTimeout(() => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
  }, delay[index]);
}, 100);

