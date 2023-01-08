function main(args) {
    let name = args.name || 'vreemde'
    let greeting = 'Hallo ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }

exports.main = main
