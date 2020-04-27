import React, { Component } from 'react'

export default class Test2 extends Component {
    constructor(props){
        super(props);
        const imguri = localStorage.getItem('picture');
        this.state={
            image:imguri
        }
    }
    componentDidMount(){
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col col-sm-12'>
                        This is the Retake and Looks Good Page
                    </div>
                    <div className='col col-sm-12'>
                        This image is saved using Local Storage
                        <img src={this.state.image}/>
                    </div>
                    <div className='col col-sm-12'>
                        <button>Retake</button>
                        <button>Looks Good</button>
                    </div>
                </div>
            </div>
        )
    }
}
