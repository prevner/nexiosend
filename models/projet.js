let connexion = require("../config/db")

class projet {

    
    static create
    static getAll = (cb) => {
        let query = "SELECT * FROM projet";       
        connexion.query(query, (err, row) => {
            if(err) 
            {
                row.status(500).send({
                    message:
                      err.message || "une erreur est parvenue pendant la recupération de la liste des projets."
                  });
            }
            else
           return cb(row);
            
        })
    };
    static validation(id,cb)
    {
        connexion.query(
            "UPDATE projet SET ETAT2 =1 where NUMPROJ =?",
            [id],
            (err, res) => 
            {
             if(err)
             {
                console.log("error: ", err);
             }else
             {
                console.log("projet validé ");
                 return cb(res)
             }
            }
          );
    } 
    static interest(numproj,numc,cb)
    {
        connexion.query(
            "INSERT INTO interesser SET NUMC =? where NUMPROJ =?",
            [numc,numproj],
            (err, res) => 
            {
             if(err)
             {
                console.log("error: ", err);
             }else
             {
                console.log("projet interesser ");
                 return cb(res)
             }
            }
          );
    } 
   
 }     


module.exports = projet