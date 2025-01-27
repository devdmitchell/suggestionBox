const express = require('express')
const router = express.Router()
const suggestionController = require('../../controllers/suggestionController')

router.get('/get-all-suggestions', suggestionController.getAllSuggestions)
router.get('/get-single-suggestion/:id', suggestionController.getSingleSuggestion)
router.post('/create-suggestion', suggestionController.createSuggestion)
router.put('/update-suggestion-by-id/:id', suggestionController.updateSuggestion)
router.delete('/delete-suggestion-by-id/:id', suggestionController.deleteSuggestion)
router.get('/by-author-suggestion', suggestionController.getSuggestionsByAuthor)

module.exports = router