// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor(){
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    makingBitrateChange = () => {
        this.setState(() => {
            return {
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                  }
            }
        })
    }

    makingResolutionChange = () => {
        this.setState(()=>{
            return {
                settings:{
                    ...this.state.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render(){
        return(
            <button className='bitrate' onClick={this.makingBitrateChange}>Bitrate change!</button>,
            <button className='resolution' onClick={this.makingResolutionChange}>Resolution change!</button>
        )
    }

}

export default YouTubeDebugger;