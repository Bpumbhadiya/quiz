var express = require('express');
var router = express.Router();

const CAT = require('../model/catagory');
const QUESTION = require('../model/que');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/all', async function (req, res, next) {
  try {
    const data = await CAT.find()
    res.status(200).json({
      status: "Suceess", 
      message: "All users found",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});


router.post('/add', async function (req, res, next) {
  try {
    if (!req.body.name || !req.body.image ) {
      throw new Error("Please enter valid fields")
    }
    const data = await CAT.create(req.body)
    res.status(201).json({
      status: "Suceess",
      message: "user created",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
    
  }
});


router.delete('/delete/:id', async function (req, res, next) {
  try {
    await CAT.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: "Suceess",
      message: "user deleted",
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});

router.patch('/update/:id', async function (req, res, next) {
  try {
    await CAT.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      status: "Suceess",
      message: "user updated"
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});




router.get('/queall', async function (req,res,next) {
  try {
    const data = await QUESTION.find()
    res.status(200).json({
      status:"success",
      message: "QUESTION found",
      data : data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});

router.post('/queadd', async function (req,res,next) {
  try {
    if (!req.body.question || !req.body.option || !req.body.ans || !req.body.catagory) {
      throw new Error("Please enter valid fields")
    }
    const newdata = await QUESTION.create(req.body)
    res.status(201).json({
      status: "success",
      message:"QUESTION created",
      data : newdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
})

router.delete('/quedelete/:id', async function (req,res,next) {
  try {
    await QUESTION.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: "Suceess",
      message: "QUESTION deleted",
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
})

router.patch('/queupdate/:id', async function (req,res,next) {
  try {
    await QUESTION.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({
      status: "Suceess",
      message: "QUESTION updated"
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
})

module.exports = router;



