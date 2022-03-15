const patterns = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   '];
let interval = 100;
for (const pattern of patterns) {
  setTimeout(() => {
    process.stdout.write(pattern);
  }, interval)
  interval += 100;
};
setTimeout(() => {
  console.log();
}, 900)