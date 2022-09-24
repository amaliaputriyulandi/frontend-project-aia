import React, { Component } from 'react'

// export default class PhotoComponent extends Component {

//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }


const PhotoComponent = () => {
    this.state = {
        pictures: [],
    }

    fetch('https://api-todo-task-aia-2022.herokuapp.com/api/photo/getAll/')
    .then(function(response){
        return response.json();
    })
    .then(function(j){
        alert(JSON.stringify(j))
        let picArray = j.photos.photo.map((pic) => { 
            var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
            return(
                <img src={srcPath}></img>
            )
        })
        this.setState({pictures: picArray})
    }.bind(this))
    return (
        <div>
            {this.state.pictures}
        </div>
    )
}

export default PhotoComponent
