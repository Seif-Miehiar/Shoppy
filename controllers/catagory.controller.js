exports.create = ( req, res ) => {
  console.log(req.user)
  setTimeout(()=> {
    res.json({
      successMessage: `${req.body.catagory} was created!`
    })

  }, 5000)
}