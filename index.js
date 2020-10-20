module.exports = {
  register: (url, router) => {
    router.get('/ignored', async (q, a) => {
      
      a.send({
        result: true,
        message: "Hello world from github."
      })
    })
  }
}
