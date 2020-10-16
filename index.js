module.exports = {
  register: (url, router) => {
    router.get('/helloworld', (q, a) => {
      a.send('hi')
    })
  }
}
