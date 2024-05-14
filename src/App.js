import './App.css';
import Editor from './components/Editor';


import { Amplify } from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import config from './amplifyconfiguration.json';
Amplify.configure(config);

const App = ({ signOut, user }) => {
  

  return (
    <div>
    
    <Button onClick={signOut}>Sign out</Button>

    <br></br>
    <Editor user={user}/>
    
  </div>
  );
};

export default withAuthenticator(App);
