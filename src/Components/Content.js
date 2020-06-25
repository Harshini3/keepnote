import React from 'react';
import PropTypes from 'prop-types'
function Content(props) {
    const post = props.post
    return <figure className="figure"> 
                <p className= "Content" src={post.description}    />
                <figcaption> <p> {post.description} </p> </figcaption>
                <div className = "button-container">
                <button onClick = {() => {
                    props.onRemoveContent(post)
                }}> Remove </button>
                </div>
         </figure>

}

Content.propTypes = {
    post: PropTypes.object.isRequired,
    onRemoveContent: PropTypes.func.isRequired
}


export default Content
