import React from 'react';
import {MarkdownPreview} from 'react-marked-markdown';

export default class Comment extends React.Component {
    render() {
        return <div className="comment">
            <h2 className="commentAuthor">
                {this.props.author}
            </h2>
            <MarkdownPreview value={this.props.children} />
        </div>
    }
}