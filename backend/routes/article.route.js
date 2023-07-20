const express = require('express');
const router = express.Router();
const Article = require("../models/article");

// Afficher la liste des articles.
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find().populate("scategorieID").exec();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Créer un nouvel article
router.post('/', async (req, res) => {
  try {
    const nouvelArticle = new Article(req.body);
    await nouvelArticle.save();
    res.status(201).json(nouvelArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Chercher un article par ID
router.get('/:articleId', async (req, res) => {
  try {
    const article = await Article.findById(req.params.articleId);
    if (!article) {
      res.status(404).json({ message: 'Article not found' });
      return;
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Modifier un article
router.put('/:articleId', async (req, res) => {
  try {
    const { reference, designation, prix, marque, qtestock, imageart, scategorieID } = req.body;
    const id = req.params.articleId;

    const article = await Article.findByIdAndUpdate(id, {
      reference,
      designation,
      prix,
      marque,
      qtestock,
      imageart,
      scategorieID
    }, { new: true });

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Supprimer un article
router.delete('/:articleId', async (req, res) => {
  try {
    const id = req.params.articleId;
    const article = await Article.findByIdAndDelete(id);
    if (!article) {
      res.status(404).json({ message: 'Article not found' });
      return;
    }
    res.status(200).json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
