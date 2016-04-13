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
        $(window).on('load', function () {
            NProgress.done();
        });
    }

    render() {
        var images = this.state.data.map(function (v, k) {
            return (
                <img src={v.url} title={v.name} key={k}/>
            )
        });
        return (
            <div className="image-list">
                {images}
            </div>
        );
    }
}