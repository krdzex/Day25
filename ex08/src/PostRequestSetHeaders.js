import React from 'react';
class PostRequestSetHeaders extends React.Component {
    constructor(props) {
        super(props);
        this.state = { articleId: null };
    }
    render() {
        const { articleId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Set Headers</h5>
                <div className="card-body">
                    Article Id: {articleId}
                </div>
            </div>
        );
    }
    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authoriyation': 'Bearer my-token',
                'My-Custom-Header': 'footbar'
            },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ articleId: data.id }));

    }
}
export default PostRequestSetHeaders;