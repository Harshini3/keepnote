import React from 'react'
import Contents from './Content'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function PostIt(props) {
return  <div> 
             <Link className = "addIcon" to="/AddContent"> </Link> 
             <div className="ContentsGrid" >
                  {props.posts
                    .sort(function(x,y) {
                        return  y.id - x.id
                    })
                    .map((post, index) => <Contents key={index} post={post} onRemoveContent={props.onRemoveContent}/>)}
             </div>
        </div>
}

PostIt.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemoveContent: PropTypes.func.isRequired
}


 export default PostIt