module.exports = {
  register: (url, router) => {
    console.log('registering', url, router)
    router.get('/helloworld', (q, a) => {
      a.send('hi')
    })
  }
}
