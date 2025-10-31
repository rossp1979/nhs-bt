// External dependencies
const express = require('express')

const router = express.Router()

// Run this code when a form submitted to '/magical-powers-answer'
router.post('/magical-powers-answer', function (req, res) {

  // Make a variable and give it the value from 'hasSymptoms'
  const hasMagicPowers = req.session.data.hasSymptoms

  // Check whether the variable matches a condition
  if (hasMagicPowers == "Yes") {

    // Send user to next page
    res.redirect('/details')
  }
  else if (hasMagicPowers == "No" || hasMagicPowers == "Not sure") {

    // Send user to ineligible page
    res.redirect('/ineligible')
  }
  else {

    // No answer, return to question
    res.redirect('/magical-powers')
  }
})

module.exports = router
