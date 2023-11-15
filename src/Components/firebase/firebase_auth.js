import 'react';
import 'react-native';
import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    databaseURL: 'YOUR_DATABASE_URL',
    projectId: 'YOUR_PROJECT_ID',
});

function auth(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Create a new user object with name and email
        const newUser = {
          name: name,
          email: email,
        };
    
        // Get a reference to the "users" node in the database
        const usersRef = firebase.database().ref('users');
    
        // Push the new user object to the database
        usersRef.push(newUser)
          .then(() => {
            console.log('User data stored successfully');
            // Reset the form inputs
            setName('');
            setEmail('');
          })
          .catch((error) => {
            console.error('Error storing user data:', error);
          });
      };
}