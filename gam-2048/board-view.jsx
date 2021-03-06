import React from 'react';
import Cell from './cell.jsx';
import TileView from './tile-view.jsx';
import GameEndOverlay from './game-end-overlay.jsx';

export default class BoardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {board: new Board};
    }

    restartGame() {
        this.setState({board: new Board});
    }

    handleKeyDown(event) {
        if (this.state.board.hasWon()) {
            return;
        }
        if (event.keyCode >= 37 && event.keyCode <= 40) {
            event.preventDefault();
            var direction = event.keyCode - 37;
            this.setState({board: this.state.board.move(direction)});
        }
    }

    handleTouchStart(event) {
        if (this.state.board.hasWon()) {
            return;
        }
        if (event.touches.length != 1) {
            return;
        }
        this.startX = event.touches[0].screenX;
        this.startY = event.touches[0].screenY;
        event.preventDefault();
    }

    handleTouchEnd(event) {
        if (this.state.board.hasWon()) {
            return;
        }
        if (event.changedTouches.length != 1) {
            return;
        }
        var deltaX = event.changedTouches[0].screenX - this.startX;
        var deltaY = event.changedTouches[0].screenY - this.startY;
        var direction = -1;
        if (Math.abs(deltaX) > 3 * Math.abs(deltaY) && Math.abs(deltaX) > 30) {
            direction = deltaX > 0 ? 2 : 0;
        } else if (Math.abs(deltaY) > 3 * Math.abs(deltaX) && Math.abs(deltaY) > 30) {
            direction = deltaY > 0 ? 3 : 1;
        }
        if (direction != -1) {
            this.setState({board: this.state.board.move(direction)});
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }

    render() {
        var cells = this.state.board.cells.map((row, rowIndex) => {
            return (
                <div key={rowIndex}>
                    { row.map((_, columnIndex) => <Cell key={rowIndex * Board.size + columnIndex}/>) }
                </div>
            );
        });
        var tiles = this.state.board.tiles
            .filter(tile => tile.value != 0)
            .map(tile => <TileView tile={tile} key={tile.id}/>);
        return (
            <div className='board' onTouchStart={this.handleTouchStart.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)} tabIndex="1">
                {cells}
                {tiles}
                <GameEndOverlay board={this.state.board} onRestart={this.restartGame.bind(this)}/>
            </div>
        );
    }
}