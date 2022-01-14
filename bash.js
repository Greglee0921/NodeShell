// output a prompt
process.stdout.write('prompt > ')

// the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  // const cmd = require('./pwd')
  // console.log(cmd)
  const cmd = data.toString().trim() // remove the newline

  const pwd = require('./pwd');
  
  if (cmd === 'pwd') {

pwd();
}


  // process.stdout.write('You typed: ' + cmd)
  process.stdout.write('\nprompt > ')
})
