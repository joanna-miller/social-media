import React from 'react';
import { Card, Form, Image } from 'react-bootstrap';
import Tweet from './Tweet.js'
import tomImage from './../img/tom.png'
import fakePerson from './../img/fake-person.png'
import fakePerson2 from './../img/fake-person2.png'
import fakePerson3 from './../img/fake-person3.png'

const masterTweetList =[
  {
    image: <Image src={fakePerson} style={{ height: '50px' }} roundedCircle />,
    username: 'fake_user_1',
    body: 'summer is the best season idc'
  },
  {
    image: <Image src={fakePerson2} style={{ height: '50px' }} roundedCircle />,
    username: 'fake_user_2',
    body: "I can't tell if I like sparkling water, or if I just like the sound of a can opening"
  },
  {
    image: <Image src={fakePerson3} style={{ height: '50px' }} roundedCircle />,
    username: 'fake_user_3',
    body: 'voting is more often than every four years!'
  }
]

function NewsFeed() {
  return(
    <>
      <Card>
        <Card.Header style={{display: 'flex', flexDirection: 'row'}} >
          <Image src={tomImage} style={{ height: '50px' }} roundedCircle />
          <Form.Control type="text" placeholder="What's happening?" />
        </Card.Header>
        <Card.Body>
          {masterTweetList.map((tweet, index) =>
            <Tweet image={tweet.image}
            username={tweet.username}
            body={tweet.body}
            key={index}/>
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default NewsFeed;