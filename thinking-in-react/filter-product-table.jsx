import React from 'react';
import $ from 'jquery';
import ProductTable from './product-table.jsx';
import SearchBar from './search-bar.jsx';

export default class FilterBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [], filterText: '', inStockOnly: false};
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

    handleUserInput(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div className="filterProductTable">
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onUserInput={this.handleUserInput.bind(this)}/>
                <ProductTable products={this.state.data} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
            </div>
        );
    }
}