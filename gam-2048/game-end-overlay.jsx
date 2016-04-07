import React from 'react';

export default class GameEndOverlay extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        var contents = '';
        var board = this.props.board;
        if (board.hasWon()) {
            contents = 'Good Job!';
        } else if (board.hasLost()) {
            contents = 'Game Over';
        }
        if (!contents) {
            return null;
        }
        return (
            <div className='overlay'>
                <p className='message'>{contents}</p>
                <button className="tryAgain" onClick={onRestart} onTouchEnd={onRestart}>Try again</button>
            </div>
        );
    }
}