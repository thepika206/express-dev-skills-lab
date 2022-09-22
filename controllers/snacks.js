//import the data model for snacks
import { Snack } from '../models/snack.js'

//first function to view the index list of snacks, use the find method and pass the result to view as snacks
function index(req,res){
  Snack.find({})
  .then(snacks =>{
    console.log('snacks here', snacks )
    res.render('snacks/index',{
      snacks: snacks
    })
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/')
  })
}

//export functions

export {
  index
}