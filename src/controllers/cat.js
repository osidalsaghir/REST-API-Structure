
const Cat =require("../models/cat");
exports.getall = (req, res, next) => {
        res.json(200, "success");
    
}


exports.setcat = (req, res, next) => {
        const cat = new Cat({
                title:"new title",
        });
        cat.save().then(data =>{
                res.json(200, "success");
        }).catch((err)=>{
                res.json(400, "not success");
        });
    
}