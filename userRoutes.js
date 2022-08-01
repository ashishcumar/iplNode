const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const teamsSchema = new mongoose.Schema({
  img: {
    type: String,
    length: 500,
  },
  teamName: String,
  Stadium: String,
  Won: String,
  background: String,
  border: String,
  coach: String,
  Captain: String,
  topbowler: String,
  totalPLayer: String,
  id:String
});

const playerSchema = new mongoose.Schema({
  img: String,
  playername: String,
  role: String,
  price: String,
  isPlaying: String,
  description: String,
});

let teamModel = mongoose.model("teamsData", teamsSchema);
let playerModel1 = mongoose.model("cskPlayers", playerSchema);
let playerModel2 = mongoose.model("dcPlayers", playerSchema);
let playerModel3 = mongoose.model("gtPlayers", playerSchema);
let playerModel4 = mongoose.model("kkrPlayers", playerSchema);
let playerModel5 = mongoose.model("lsgPlayers", playerSchema);
let playerModel6 = mongoose.model("miPlayers", playerSchema);
let playerModel7 = mongoose.model("pkPlayers", playerSchema);
let playerModel8 = mongoose.model("RRPlayers", playerSchema);
let playerModel9 = mongoose.model("rcbPlayers", playerSchema);
let playerModel10 = mongoose.model("shPlayers", playerSchema);

router.post("/addPlayer/:id", (req, res) => {
  if(req.params.id == 1){
    let player = new playerModel1(req.body);
    player.save((err, savedPlayer) => {
      if (err) {
        res.json({ Error: "Player is not saved in database" });
      } else {
        res.json({ Success: "Player saved in Database", savedPlayer });
      }
    });
  }
  else if(req.params.id == 2){
    let player = new playerModel2(req.body);
    player.save((err, savedPlayer) => {
      if (err) {
        res.json({ Error: "Player is not saved in database" });
      } else {
        res.json({ Success: "Player saved in Database", savedPlayer });
      }
    });
  }
  else if(req.params.id == 3){
    let player = new playerModel3(req.body);
    player.save((err, savedPlayer) => {
      if (err) {
        res.json({ Error: "Player is not saved in database" });
      } else {
        res.json({ Success: "Player saved in Database", savedPlayer });
      }
    });
  }
  else if(req.params.id == 4){
    let player = new playerModel4(req.body);
    player.save((err, savedPlayer) => {
      if (err) {
        res.json({ Error: "Player is not saved in database" });
      } else {
        res.json({ Success: "Player saved in Database", savedPlayer });
      }
    });
  }
  else if(req.params.id == 5){
    let player = new playerModel5(req.body);
    player.save((err, savedPlayer) => {
      if (err) {
        res.json({ Error: "Player is not saved in database" });
      } else {
        res.json({ Success: "Player saved in Database", savedPlayer });
      }
    });
  }
  else if(req.params.id == 6){
    let player = new playerModel6(req.body);
    player.save((err, savedPlayer) => {
      if (err) {
        res.json({ Error: "Player is not saved in database" });
      } else {
        res.json({ Success: "Player saved in Database", savedPlayer });
      }
    });
  }
  else if(req.params.id == 7){
    let player = new playerModel7(req.body);
    player.save((err, savedPlayer) => {
      if (err) {
        res.json({ Error: "Player is not saved in database" });
      } else {
        res.json({ Success: "Player saved in Database", savedPlayer });
      }
    });
  }
  else if(req.params.id == 8){
    let player = new playerModel8(req.body);
    player.save((err, savedPlayer) => {
      if (err) {
        res.json({ Error: "Player is not saved in database" });
      } else {
        res.json({ Success: "Player saved in Database", savedPlayer });
      }
    });
  }
  else if(req.params.id == 9){
    let player = new playerModel9(req.body);
    player.save((err, savedPlayer) => {
      if (err) {
        res.json({ Error: "Player is not saved in database" });
      } else {
        res.json({ Success: "Player saved in Database", savedPlayer });
      }
    });
  }
  else if(req.params.id == 10){
    let player = new playerModel10(req.body);
    player.save((err, savedPlayer) => {
      if (err) {
        res.json({ Error: "Player is not saved in database" });
      } else {
        res.json({ Success: "Player saved in Database", savedPlayer });
      }
    });
  }
});

router.get("/getTeams", async (req, res) => {
  let result = await teamModel.find();
  console.log(result);
  res.json(result);
});

router.get("/getTeams/:id", async (req, res) => {
    let result = await teamModel.find({id:req.params.id});
    console.log(result);
    res.json(result);
  });

router.get("/players1", async (req, res) => {
  let result = await playerModel1.find();
  console.log(result);
  res.json(result);
});

router.get("/players2", async (req, res) => {
  let result = await playerModel2.find();
  console.log(result);
  res.json(result);
});
router.get("/players3", async (req, res) => {
  let result = await playerModel3.find();
  console.log(result);
  res.json(result);
});
router.get("/players4", async (req, res) => {
  let result = await playerModel4.find();
  console.log(result);
  res.json(result);
});
router.get("/players5", async (req, res) => {
  let result = await playerModel5.find();
  console.log(result);
  res.json(result);
});
router.get("/players6", async (req, res) => {
  let result = await playerModel6.find();
  console.log(result);
  res.json(result);
});
router.get("/players7", async (req, res) => {
  let result = await playerModel7.find();
  console.log(result);
  res.json(result);
});
router.get("/players8", async (req, res) => {
  let result = await playerModel8.find();
  console.log(result);
  res.json(result);
});
router.get("/players9", async (req, res) => {
  let result = await playerModel9.find();
  console.log(result);
  res.json(result);
});
router.get("/players10", async (req, res) => {
  let result = await playerModel10.find();
  console.log(result);
  res.json(result);
});

module.exports = router;

router.delete('/Player1/:id',(req,res) =>{
    playerModel1.deleteOne({playername : req.params.id} ,(err) => {
      if (err) {
        res.json({ Error: "Player is not deleted from database" });
      } else {
        res.json({ Success: "Player deleted from Database",});
      }
    })
  })


router.delete('/Player2/:id',(req,res) =>{
    playerModel2.deleteOne({id : req.params.id} ,(err) => {
      if (err) {
        res.json({ Error: "Player is not deleted from database" });
      } else {
        res.json({ Success: "Player deleted from Database",});
      }
    })
  })
  
router.delete('/Player3/:id',(req,res) =>{
    playerModel3.deleteOne({id : req.params.id} ,(err) => {
      if (err) {
        res.json({ Error: "Player is not deleted from database" });
      } else {
        res.json({ Success: "Player deleted from Database",});
      }
    })
  })

router.delete('/Player4/:id',(req,res) =>{
   playerModel4.deleteOne({id : req.params.id} ,(err) => {
      if (err) {
        res.json({ Error: "Player is not deleted from database" });
      } else {
        res.json({ Success: "Player deleted from Database",});
      }
    })
})

router.delete('/Player5/:id',(req,res) =>{
    playerModel5.deleteOne({id : req.params.id} ,(err) => {
      if (err) {
        res.json({ Error: "Player is not deleted from database" });
      } else {
        res.json({ Success: "Player deleted from Database",});
      }
    })
  })


router.delete('/Player6/:id',(req,res) =>{
    playerModel6.deleteOne({id : req.params.id} ,(err) => {
      if (err) {
        res.json({ Error: "Player is not deleted from database" });
      } else {
        res.json({ Success: "Player deleted from Database",});
      }
    })
  })
  
router.delete('/Player7/:id',(req,res) =>{
  playerModel7.deleteOne({id : req.params.id} ,(err) => {
      if (err) {
        res.json({ Error: "Player is not deleted from database" });
      } else {
        res.json({ Success: "Player deleted from Database",});
      }
    })
  })


router.delete('/Player8/:id',(req,res) =>{
  playerModel8.deleteOne({id : req.params.id} ,(err) => {
      if (err) {
        res.json({ Error: "Player is not deleted from database" });
      } else {
        res.json({ Success: "Player deleted from Database",});
      }
    })
  })
  
router.delete('/Player9/:id',(req,res) =>{
  playerModel9.deleteOne({id : req.params.id} ,(err) => {
      if (err) {
        res.json({ Error: "Player is not deleted from database" });
      } else {
        res.json({ Success: "Player deleted from Database",});
      }
    })
  })
  
router.delete('/Player10/:id',(req,res) =>{
  playerModel10.deleteOne({id : req.params.id} ,(err) => {
      if (err) {
        res.json({ Error: "Player is not deleted from database" });
      } else {
        res.json({ Success: "Player deleted from Database",});
      }
    })
  })

