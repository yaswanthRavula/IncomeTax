const mongoose=require('mongoose');
const clientSchema=new mongoose.Schema([
    {name:String},
    {mailId:String},
    {fileType:String},
    {query:String}
])
module.exports=mongoose.model("Clients",clientSchema);