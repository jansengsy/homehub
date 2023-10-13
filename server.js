const express = require('express');
const cors = require('cors');

// Create express app
const app = express();

// Add cors as a middle ware
app.use(cors());

// Login endpoint to provide dummy token
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.use('/charts/line/:id', (req, res) => {
  res.send({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          911,
          968,
          -506,
          276,
          994,
          616,
          -271
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [
          611,
          -968,
          451,
          -34,
          -64,
          -865,
          945
        ],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });
});

app.use('/charts/bar/:id', (req, res) => {
  res.send({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          831,
          217,
          290,
          520,
          457,
          481,
          928
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [
          429,
          194,
          237,
          953,
          895,
          376,
          197
        ],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });
});

app.use('/charts/pie/:id', (req, res) => {
  res.send({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });
});

// Data endpoint to provide dummy chart data
app.use('/data', (req, res) => {
  res.send([
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234
    }
  ]);
});

// Menu endpoint to provide dummy menu items
app.use('/menu', (req, res) => {
  res.send([
    {
      id: 0,
      title: 'Steak',
      ingredients: ['2 Ribeye steaks', '200g Butter', 'Fresh Thyme', 'Rock Salt'],
      steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
      servings: 2,
      prepTime: 20,
    },
    {
      id: 1,
      title: 'Curry',
      ingredients: ['1 Large onion', 'Curry Spices', '1 Tin of chopped tomatoes', '200g Rice', '2 Naan breads'],
      steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6'],
      servings: 2,
      prepTime: 40,
    },
    {
      id: 2,
      title: 'Salad',
      ingredients: ['200g Spinach', '200 Black beans', '200g Cherry tomatoes', '150g Feta', 'Salad dressing'],
      steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
      servings: 2,
      prepTime: 5,
    },
    {
      id: 3,
      title: 'Bolognese',
      ingredients: ['250g Beef mince', '250g Pork mince', '1 Tin of chopped tomatoes', '1 Medium carrot', '1 Large onion', '200g Spaghetti'],
      steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'step 7'],
      servings: 2,
      prepTime: 45,
    }
  ]);
});

// Run app on port 8080
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
