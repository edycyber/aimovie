require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();
const validCodes = process.env.VALID_CODES.split(',');

app.use(express.json());

app.post('/validate-code', (req, res) => {
    const { code } = req.body;
    if (validCodes.includes(code.trim())) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


