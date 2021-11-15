function alarmClock() {
  const userArgs = process.argv.slice(2);
  if (userArgs.length === 0) return;
  for (const arg of userArgs) {
    const parsedArg = parseInt(arg);
    const isValid = Number.isInteger(parsedArg);
    if (isValid && parsedArg >= 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, parsedArg * 1000);
    }
  }
}

alarmClock();
