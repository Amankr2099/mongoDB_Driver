const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/wizdb")

const wizSubSchema = {
  subNum : Number,
  sub1 : String,
  sub2 : String,
  sub2 : String
}

const Subject = mongoose.model("Subject",wizSubSchema)

const wizSchema = mongoose.Schema ({
    _id : Number,
    name : {
      type: String,
      required: [true,'If you don\'t have a name then please make one like you-know-who']
    },
    house : String,
    year :{
      type : Number,
      min : 1,
      max : 7
    },
    sub : wizSubSchema
});

const Student = mongoose.model("Student",wizSchema)


//-------Inserting documents--------

// Student.insertMany(
//   [{
//       _id : 5,
//       name : "Cindy Hose",
//      house : "Hufflepuff",
     
//   }]
// ).then(console.log("Inserted Successfully "))
// .catch ((err)=> {
//   console.log(err);
// })


//------------Reading Documents--------------

// async function readDoc() {
//   try {
//     const docs = await Student.find({})
//     console.log(docs);
//   } catch (error) {
//     console.log(error);
//   }
// }
// readDoc()


// Student.find({}).sort({_id:1})
// .then((docs)=>{
//   console.log(docs);
// })
// .catch((err)=>{
//   console.log(err)
// })

//------------Updating Documents-----------------

// Student.updateOne({_id :1},{year: 2})
// .then(console.log("updated successfully !"))
// .catch((err)=>{
//   console.log(err)
// })

// for (let i = 2; i < 8; i++) {
//   let num = Math.floor((Math.random()*7) + 1)
//   Student.findOneAndUpdate({_id:i}, { year : num})
//   .then(console.log(i+"item updated successfully !"))
//   .catch((err)=>{
//   console.log(err)
//   })
// }



//------------Deleting Documents-----------------

// Student.deleteOne({name:'Satendra'})
// .then(console.log("Deleted successfully !"))
// .catch((err)=>{
//   console.log(err)
// })

//-------------Intra Collection embedding-----------

// const Cindysubject = new Subject({
//   subNum : 5,
//   sub1 : "Defence Against Dark Art",
//   sub2 : "Charms",
//   sub3 : "Occlumency"
// })
// Cindysubject.save()

// Student.findOneAndUpdate({_id : 5},{sub : Cindysubject})
// .then(console.log("Added Successfully "))
// .catch((err)=>{
//   console.log(err)
// })

// mongoose.connection.close();