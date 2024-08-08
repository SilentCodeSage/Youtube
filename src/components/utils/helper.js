// List of first names
const firstNames = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack',
    'Katherine', 'Liam', 'Mia', 'Noah', 'Olivia', 'Paul', 'Quincy', 'Rachel', 'Sarah', 'Tom'
  ];
  
  // List of last names
  const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
    'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson'
  ];
  
  // Function to get a random item from an array
  const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  
  // Function to generate a random name
  export const generateRandomName = () => {
    const firstName = getRandomItem(firstNames);
    const lastName = getRandomItem(lastNames);
    return `${firstName} ${lastName}`;
  };
  
  // Example usage (uncomment to test the function directly)
  