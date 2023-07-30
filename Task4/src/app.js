    const express = require('express')
    const app = express()

    const port = process.env.PORT || 3000

    
    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))



      app.set('view engine', 'hbs');

      const viewsDirectory = path.join (__dirname , "../temp/views" )
      app.set( "views" , viewsDirectory)


      var hbs = require ('hbs')

      const partialsPath = path.join (__dirname , "../temp/partials")

      hbs.registerPartials(partialsPath)



      const weather = require ("./data/weather")



      app.get('/check weather' , (req , res) => {
        res.render('check weather' , {
            title : "check weather",
            country : ,
            latitude: ,
            longitude: ,
            weather : 
        })
    })


      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
        })
        

////////////////////////////////////////////////////////////////////////////////

    
