const express = require("express");
const router = express.Router();


let db = {
    checking: 200,
    savings: 1500,
    transactions: [{
        type: 'savings/deposit', 
        amount:245, 
        date: (new Date()).toLocaleString()
    },
    {
        type: 'checking/deposit', 
        amount: 123, 
        date: (new Date()).toLocaleString()
    }
]
}

router.get("/banking", (req, res) => {
    res.render("bank");
});
  
  router.get('/checkingbalance', (req, res) => {
      
      
    // gets the checking balance for our accoutn 

    res.json({checkingBalance: db.checking})

  });
  
  router.get('/savingsbalance', (req, res) => {
      
    //gets the saving balance for our account 

    res.json({savingBalance: db.savings})
      
  });
  
  router.post('/depositchecking', (req, res) => {
      
      // get information off the header 

      let {amount, transType} = req.body; 


      amount = parseFloat(amount);  // this is a float now instead of a string 

      if(transType === "checking/deposit"){

        // db.checking = db.checking + amount
        db.checking+=amount
      }
      else if(transType === "savings/deposit"){
        // db.savings = db.savings + amount;
        db.savings+=amount
      }

      let transaction = {
          type: transType, 
          amount: amount, 
          date: (new Date()).toDateString()
      }

      // add this object to the beginning of our transaction array 

      db.transactions.unshift(transaction)


      res.json({checking: db.checking, savings: db.savings, transactions: db.transactions})

  
  })
  
  
  module.exports = router;