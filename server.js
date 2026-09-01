const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/booking', (req, res) => {
    const booking = req.body;

    fs.readFile('data/bookings.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Something went wrong.');
    }

    const bookings = JSON.parse(data);
    bookings.push(booking);

    fs.writeFile('data/bookings.json', JSON.stringify(bookings, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).send('Something went wrong.');
      }
      res.send('Thanks! We received your request and will contact you shortly.');
    });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})


