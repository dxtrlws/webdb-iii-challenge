const express = require('express');
const router = express.Router();
const cohortDb = require('../helpers/cohortsDb');

router.get('/', async (req, res) => {
  try {
    const cohorts = await cohortDb.get();
    res.status(200).json(cohorts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cohort = await cohortDb.getById(req.params.id);
    res.status(200).json(cohort);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const cohort = await cohortDb.insert(req.body);
    res.status(201).json(cohort);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const cohort = await cohortDb.remove(req.params.id);
    res.status(200).json(cohort);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cohort = await cohortDb.update(id, req.body);
    res.status(200).json(cohort);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
