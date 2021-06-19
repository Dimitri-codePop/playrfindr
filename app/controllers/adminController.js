
module.exports = {
   
   home(_, res){
       try {
           res.status(200).json({message: `Bienvenue a deux mains`})
       } catch (error) {
           console.trace(error);
           res.status(500).json({error})
       }
   }

   
}