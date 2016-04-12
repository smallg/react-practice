import React from 'react';
import $ from 'jquery';
import NProgress from 'nprogress';

export default class ImageGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        NProgress.start();
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});

            }.bind(this)
        });
        window.onload = function(){
            NProgress.done();
        }
    }

    render() {

        var images = this.state.data.map(function (v) {
            return (
                <img src={v.url}/>
            )
        });
        return (
            <div className="image-list">
                {images}
            </div>
        );
    }
}