const express = require('express');
const cors = require('cors');

// Create express app
const app = express();

// Add cors as a middle ware
app.use(cors());

// Token verification middleware. For now this will just check that the token is 'test123'
const verifyToken = (req, res, next) => {
  const userToken = req.headers.authorization;

  if (!userToken) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  if (userToken !== 'Bearer test123') {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }

  next();
};

app.use('/login', (req, res) => {
  res.send({
    token: {
      token: 'test123'
    },
    user: {
      username: 'jansengsy',
      id: 1,
    }
  });
});

app.use('/shopping/:id', verifyToken, (req, res) => {
  res.send([
    {
      'id': 1,
      'icon': 'fa-solid fa-house',
      'item': 'Bread',
      'completed': false,
    },
    {
      'id': 2,
      'icon': 'fa-solid fa-house',
      'item': 'Eggs',
      'completed': false,
    },
    {
      'id': 3,
      'icon': 'fa-solid fa-house',
      'item': 'Grapefruit',
      'completed': true,
    },
    {
      'id': 4,
      'icon': 'fa-solid fa-house',
      'item': 'Cat food',
      'completed': false,
    },
    {
      'id': 5,
      'icon': 'fa-solid fa-house',
      'item': 'Breakfast cereal',
      'completed': true,
    },
  ]);
});

app.use('/bills/:id', verifyToken, (req, res) => {
  res.send([
    {
      'id': 1,
      'icon': 'fa-brands fa-spotify',
      'heading': 'Spotify',
      'dueDate': new Date(2023, 9, 17),
      'amount': '9.99',
    },
    {
      'id': 2,
      'icon': 'fa-solid fa-faucet',
      'heading': 'Water',
      'dueDate': new Date(2023, 9, 22),
      'amount': '59.72',
    },
    {
      'id': 3,
      'icon': 'fa-solid fa-dumbbell',
      'heading': 'Gym',
      'dueDate': new Date(2023, 9, 30),
      'amount': '29.99',
    },
    {
      'id': 4,
      'icon': 'fa-brands fa-amazon',
      'heading': 'Cat food',
      'dueDate': new Date(2023, 9, 15),
      'amount': '12.99',
    },
    {
      'id': 5,
      'icon': 'fa-solid fa-mobile',
      'heading': 'Phone',
      'dueDate': new Date(2023, 10, 6),
      'amount': '35.00',
    },
    {
      'id': 6,
      'icon': 'fa-solid fa-car',
      'heading': 'Car Insurace',
      'dueDate': new Date(2023, 10, 16),
      'amount': '68.99',
    },
    {
      'id': 7,
      'icon': 'fa-solid fa-house',
      'heading': 'Rent',
      'dueDate': new Date(2023, 11, 2),
      'amount': '1200',
    },
  ]);
})

// Menu endpoint to provide dummy menu items
app.use('/menu/:id', verifyToken, (req, res) => {
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
