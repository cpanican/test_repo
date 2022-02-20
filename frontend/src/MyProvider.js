import React, {Component} from 'react';

export const MyContext = React.createContext({
  audioFile: null,
  setAudioFile: (file) => {},
  audioFileTester: () => {}
});

export default class MyProvider extends Component {
  constructor(props) {
    super(props);

    this.setAudioFile = (file) => {
      this.setState({
        audioFile: file
      })
    }

    this.test = () => {
      console.log(this.state.audioFile)
    }

    this.state = {
      audioFile: null,
      setAudioFile: this.setAudioFile,
      audioFileTester: this.test
    }
  }

  render() {
    return(
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}