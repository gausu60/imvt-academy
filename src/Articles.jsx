import React, { Component } from 'react'

export default class Articles extends Component {
    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            display: false,
            data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec. Sodales ut etiam sit amet nisl. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Viverra accumsan in nisl nisi scelerisque eu. Elementum sagittis vitae et leo duis ut diam quam. Rhoncus mattis rhoncus urna neque. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus.'
        }
        this.changeTitle = this.changeTitle.bind(this);
          
        
    }
    changeTitle()
          {
           this.setState({
               title: 'Have Good Code !',
               display: !this.state.display
           })

           
        }
    render() {
        return (
            <div className="div__articles my-5">
                <article>
                    <h3 className="title">{this.state.title}</h3>
                    {
                    this.state.display ? (
                    <blockquote>
                        {this.state.data}
                    </blockquote>
                    )  : (<button className="btn btn-primary" onClick={this.changeTitle}>Click Here!</button>)
                    }
                    
                    

                </article>
                
                
            </div>
        )
    }
}
