import React from 'react';
import ReactDOM from 'react-dom';

class PhoneCall extends React.Component {
    render() {
        return (
            <div className="phone-call">
                <h4 className="call-sid">
                    {"Call SID: " + this.props.callSid}
                </h4>
                <h4 className="to-number">
                    {"To: " + this.props.to}
                </h4>
                <h4 className="from-number">
                    {"From: " + this.props.fromNumber}
                </h4>
                <h4 className="call-status">
                    {"Status: " + this.props.callStatus}
                </h4>
            </div>
        );
    }
}

ReactDOM.render(<PhoneCall callSid='123456789' to=' 19999999999' fromNumber=' 18888888888' callStatus='completed'/>, document.getElementById('phone-calls'));