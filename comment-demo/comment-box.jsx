import React from 'react';
import CommentList from './comment-list.jsx';
import CommentForm from './comment-form.jsx';
import $ from 'jquery';

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this)
        })
    }

    render() {
        return <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data}/>
            <CommentForm />
        </div>
    }
}