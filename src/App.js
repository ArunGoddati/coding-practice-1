import Feedback from './components/Feedback'
import {Component} from 'react'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {
    clickOnEmoji: false,
    emojisResources: resources[0],
    loveEmojiResources: resources[1],
  }
  render() {
    const {clickOnEmoji, emojisResources, loveEmojiResources} = this.state
    return (
      <div className="big-container">
        <div className="inner-container">
          <h1 className="emojis-main-heading">
            How satisfy are you with our customer support performance?
          </h1>
          <ul>
            {emojisResources.map(eachEmoji => (
              <Feedback emojiDetails={eachEmoji} key={eachEmoji.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
