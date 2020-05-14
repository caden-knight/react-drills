import React, { Component } from 'react';
import Image from './components/Image'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div style={{width: '100%', height: "100vh", backgroundColor: 'black', }}>
        <Image url="https://www.memesmonkey.com/images/memesmonkey/c2/c27c7ab822c73247342c0e39ab9f6bbb.png" />
      </div>
     );
  }
}
 
export default App;
