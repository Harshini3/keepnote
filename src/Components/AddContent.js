import React, {Component} from 'react'

class AddContent extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
        }
        if (description ){
            this.props.onAddContent(post)
        }

    }

    render() {
      
        return (
    <div>
        <h1> Type your content</h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}> 
          <textarea placeholder="Description, drag to extend the box furthur" name="description"/>
               <button> Post </button>
               
          </form>
        </div>
    </div>
    )
    }
}



export default AddContent