const Suggestion = require('../models/Suggestion')
const Suggestion = require('../../models/suggestions/Suggestion');


const getAllSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find()
    res.json(suggestions)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching suggestions', error })
  }
}


const getSingleSuggestion = async (req, res) => {
  try {
    const { id } = req.params
    const suggestion = await Suggestion.findById(id)
    if (!suggestion) return res.status(404).json({ message: 'Suggestion not found' })
    res.json(suggestion)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching suggestion', error })
  }
}


const createSuggestion = async (req, res) => {
  try {
    const { title, author, suggestion, anonymous } = req.body
    const newSuggestion = new Suggestion({ title, author, suggestion, anonymous })
    await newSuggestion.save()
    res.status(201).json(newSuggestion)
  } catch (error) {
    res.status(400).json({ message: 'Error creating suggestion', error })
  }
}



const updateSuggestion = async (req, res) => {
  try {
    const { id } = req.params
    const { title, suggestion } = req.body
    const updatedSuggestion = await Suggestion.findByIdAndUpdate(
      id,
      { title, suggestion },
      { new: true, runValidators: true }
    )
    if (!updatedSuggestion) return res.status(404).json({ message: 'Suggestion not found' });
    res.json(updatedSuggestion)
  } catch (error) {
    res.status(400).json({ message: 'Error updating suggestion', error })
  }
}



const deleteSuggestion = async (req, res) => {
  try {
    const { id } = req.params
    const deletedSuggestion = await Suggestion.findByIdAndDelete(id)
    if (!deletedSuggestion) return res.status(404).json({ message: 'Suggestion not found' });
    res.json({ message: 'Suggestion deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting suggestion', error })
  }
}


const getSuggestionsByAuthor = async (req, res) => {
  try {
    const { author } = req.query
    const suggestions = await Suggestion.find({ author: author.toLowerCase() })
    res.json(suggestions)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching suggestions by author', error })
  }
}


module.exports = {
  getAllSuggestions,
  getSingleSuggestion,
  createSuggestion,
  updateSuggestion,
  deleteSuggestion,
  getSuggestionsByAuthor,
};
