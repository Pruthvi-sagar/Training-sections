class ExpressError extends Error{
    constructor(message,sattusCode){
        super();
        this.message=message;
        this.statusCode=this.statusCode;
    }
}


module.exports=ExpressError