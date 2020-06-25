import React, {Component} from 'react'
import Title from './Title'
import Content from './PostIt'
import AddContent from './AddContent'
import {Route} from 'react-router-dom'
import Hero from './Title'


class Main extends Component {
    constructor() {
        super()

        this.state = {
            posts: [{
                id: 0,
                description: "Sample text displayed for the new users",
              }
              ]
           
        }
        this.removeContent = this.removeContent.bind(this)
    }

    removeContent(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved )
        }))
    }

    AddContent(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }



    componentDidMount() {
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.posts)
        console.log(this.state)
    }

    render() {
        console.log(this.state.posts)
        return ( 
          
  
        <div class="main">

<div id="Slide_bg"></div>
            <Route exact path = "/" render={() => (
                 <div>
                      <Title title={'Post your Notes'}/>
                      <Content posts={this.state.posts} onRemoveContent={this.removeContent} onNavigate = {this.navigate}/>
                 </div>

            )}/> 
   

            <Route path= "/AddContent" render = {({history}) => (
                <AddContent onAddContent={(addedPost) => {
                    this.AddContent(addedPost)
                    history.push('/')
                }}/>
            )}/>
     
         </div>
        )
    }

}


export default Main