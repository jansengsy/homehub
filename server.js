const express = require('express');
const cors = require('cors');

// Create express app
const app = express();

// Add cors as a middle ware
app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: {
      token: 'test123'
    },
    user: {
      username: 'jansengsy',
    }
  });
});

app.use('/bills', (req, res) => {
  res.send([
    {
      'icon': 'fa-brands fa-spotify',
      'heading': 'Spotify',
      'dueDate': new Date(2023, 9, 17),
      'amount': '9.99',
    },
    {
      'icon': 'fa-solid fa-faucet',
      'heading': 'Water',
      'dueDate': new Date(2023, 9, 22),
      'amount': '59.72',
    },
    {
      'icon': 'fa-solid fa-dumbbell',
      'heading': 'Gym',
      'dueDate': new Date(2023, 9, 30),
      'amount': '29.99',
    },
    {
      'icon': 'fa-brands fa-amazon',
      'heading': 'Cat food',
      'dueDate': new Date(2023, 9, 15),
      'amount': '12.99',
    },
    {
      'icon': 'fa-solid fa-mobile',
      'heading': 'Phone',
      'dueDate': new Date(2023, 10, 6),
      'amount': '35.00',
    },
    {
      'icon': 'fa-solid fa-car',
      'heading': 'Car Insurace',
      'dueDate': new Date(2023, 10, 16),
      'amount': '68.99',
    },
    {
      'icon': 'fa-solid fa-house',
      'heading': 'Rent',
      'dueDate': new Date(2023, 11, 2),
      'amount': '1200',
    },
  ]);
})

// Menu endpoint to provide dummy menu items
app.use('/menu/:id', (req, res) => {
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
