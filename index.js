module.exports = {
  register: (url, router) => {
    console.log('registering', url, router)
    router.get('/this-url-is-ignored-if-using-elcms-api-server', (q, a) => {
      a.send('hi')
    })
  }
}
