import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './message.css';

class Message extends Component {
		render() {
				const icon = this.props.type === 'sent'
						? 'https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-1/p200x200/22449929_384533385314504_' +
								'3490922254878735069_n.png?_nc_cat=0&oh=f6fa6a484a862b0361cadca35093c152&oe=5C356' +
										'F55'
						: 'https://www.ervets4pets.com/wp-content/uploads/2017/12/img-placeholder.png';

				return (
						<div className={`facebook-message facebook-message-${this.props.type}`}>
								<img className="facebook-message-avatar" src={icon}/>
								<div
										className={`facebook-message-container facebook-message-text-${this.props.type}`}>
										<span className="facebook-message-text">{this.props.message}</span>
								</div>
						</div>
				);
		}
}

const {string} = PropTypes;

Message.propTypes = {
		type: string,
		message: string.isRequired
};

Message.defaultProps = {
		type: 'sent'
};

export default Message;
