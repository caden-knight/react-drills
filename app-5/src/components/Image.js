import React, { Component } from 'react';
class Image extends Component {
    
    render() { 
        return ( 
            <div  style={{display: 'flex', justifyContent: 'center', backgroundColor: 'black',}} className="gtfoMyWebsite">
                <img style={{marginTop: '25vh', border: 'solid yellow'}}src={this.props.url} alt="gtfo" />
            </div>
         );
        }
    }
 
export default Image;