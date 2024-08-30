module.exports = {
    apps: [
      {
        name: 'IP-55:dev',
        port: '3333',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  