import React from 'react';
import {jsonFileRef} from '../firebase';

class Internships extends React.Component {
    constructor(props) {
		super(props);
    }
    
    componentWillMount() {
        jsonFileRef.getDownloadURL().then(function(url) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = "json";
            xhr.onload = function(event) {
                console.log(xhr.response);
            };
            xhr.open('GET', url)
            xhr.send();
        }).catch(function(error) {
            switch (error.code) {
                case 'storage/object-not-found':
                  // File doesn't exist
                  break;
            
                case 'storage/unauthorized':
                  // User doesn't have permission to access the object
                  break;
            
                case 'storage/canceled':
                  // User canceled the upload
                  break;
            
                case 'storage/unknown':
                  // Unknown error occurred, inspect the server response
                  break;
              }
        });
    }
    
    render() {

        return <div>
                    <h1>Internships</h1>
                </div>
    }
}

export default Internships