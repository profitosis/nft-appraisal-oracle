
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { nftContent } = req.body;

  if (!nftContent) {
    return res.status(400).json({ error: "NFT content required" });
  }

  const mockScore = (Math.random() * 3 + 7).toFixed(1);
  res.json({
    scores: Array(9).fill(null).map(() => Math.floor(Math.random() * 4) + 7),
    overall: mockScore,
    reason: "Automated local appraisal complete"
  });
});

module.exports = router;
