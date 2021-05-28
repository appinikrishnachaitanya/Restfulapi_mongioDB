var users = require('../models/user');

module.exports.userCreate = function(req,res)
{
    let newUser = new users(req.body);
    newUser.save(function (err, user) {
        if (err) 
        {
        return console.error(err);
        }

        res.json(user);
      });

}

module.exports.getUsers = function(req,res)
{

    users.find(function (err, allusers) {
        if (err) 
         {
            return console.error(err);
         }
        res.json(allusers);
      })


};

 module.exports.getContactWithID = (req, res) => {
    users.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

module.exports.updatebyid = (req,res) => {

   users.findByIdAndUpdate({_id:req.params.contactID},req.body,{ new: true, useFindAndModify: false },function(err,newuser){

        
     if(err)
     {
         console.log(err);
     }
    
    res.json(newuser);


   })



}

module.exports.deletebyid = (req,res) => {

   users.deleteOne({_id:req.params.contactID},function(err,userdelete){

    if(err)
    {
        console.log(err);
    }


    res.send({message:"Successfully deleted"});



   });
}


      




