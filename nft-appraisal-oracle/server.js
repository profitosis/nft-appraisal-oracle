
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const appraisalRoutes = require('./routes/appraisal');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve frontend
app.use(express.static('public'));

// API routes
app.use('/api/appraise', appraisalRoutes);

const PORT = process.env.PORT || 7860;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
