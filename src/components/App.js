import React from "react"
import Header from './Header.js';
import UserDisplay from './UserDisplay.js'
import NewsFeed from './NewsFeed.js'
import Suggestions from './Suggestions.js'
import Trending from './Trending.js'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './../App.css'

function App() {
  return ( 
    <React.Fragment>
      <Header />
      <MDBContainer>
        <MDBRow>
          <MDBCol><UserDisplay /><Trending /></MDBCol>
          <MDBCol size='5'><NewsFeed /></MDBCol>
          <MDBCol><Suggestions /></MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

export default App;
