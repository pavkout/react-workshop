import React, { Component } from 'react';

import Message from '../massage/message';

import './chat.css';

class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false,
			messages: [
				{
					text: 'Hey Reactors!',
					type: 'sent'
				},
				{
					text: "What's up",
					type: 'sent'
				},
				{
					text: 'Not much... Just browsing my favorite site, www.react-skg-io. Did you check it out yet?',
					type: 'received'
				},
				{
					text: "Yeah, it's pretty awesome!",
					type: 'sent'
				},
				{
					text: ':)',
					type: 'received'
				}
			],
			activeMessage: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handlePlayClick = this.handlePlayClick.bind(this);
	}

	handleClick() {
		this.setState({ isActive: !this.state.isActive });
	}

	handleInputChange(e) {
		this.setState({ activeMessage: e.target.value });
	}

	handleKeyPress(e) {
		console.log('Enter pressed');
		var keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			this.sentMessage();
		}
	}

	handlePlayClick() {
		if (this.state.activeMessage !== '') {
			this.sentMessage();
		}
	}

	sentMessage() {
		this.setState({
			messages: this.state.messages.concat([{ type: 'sent', text: this.state.activeMessage }]),
			activeMessage: ''
		});
	}

	renderMessages() {
		const messages = this.state.messages.map((message, index) => {
			return (
				<li key={index} className={`facebook-chat-message-item facebook-chat-message-item-${message.type}`}>
					<Message type={message.type} message={message.text} />
				</li>
			);
		});

		if (messages.length === 0) {
			return null;
		}

		return <ul className="facebook-chat-messages-list">{messages}</ul>;
	}

	render() {
		return (
			<div className={`facebook-chat-container${this.state.isActive ? ' is-active' : ''}`}>
				<div className="facebook-chat-header" onClick={this.handleClick}>
					<div className="facebook-chat-header-name-container">
						<div className="facebook-chat-online" />
						<span className="facebook-chat-header-name">React Workshop</span>
					</div>
					<div className="facebook-chat-header-actions">
						<i className="facebook-chat-header-actions-icon fa fa-plus" />
						<i className="facebook-chat-header-actions-icon fa fa-camera" />
						<i className="facebook-chat-header-actions-icon fa fa-phone" />
						<i className="facebook-chat-header-actions-icon fa fa-cog" />
						<i className="facebook-chat-header-actions-icon fa fa-times" />
					</div>
				</div>
				<div className="facebook-chat-content">{this.renderMessages()}</div>
				<div className="facebook-chat-footer">
					<div className="facebook-chat-message-container">
						<input
							className="facebook-chat-message-input"
							placeholder="Type the message"
							value={this.state.activeMessage}
							onChange={this.handleInputChange}
							onKeyPress={e => this.handleKeyPress(e)}
						/>
					</div>
					<div className="facebook-chat-message-actions-container">
						<div className="facebook-chat-message-actions">
							<i className="facebook-chat-message-actions-icon fa fa-image" />
							<i className="facebook-chat-message-actions-icon fa fa-address-book" />
							<i className="facebook-chat-message-actions-icon fa fa-paperclip" />
							<i className="facebook-chat-message-actions-icon fa fa-camera" />
							<i className="facebook-chat-message-actions-icon fa fa-sticky-note" />
						</div>
						<div>
							<i
								className={`facebook-chat-message-actions-like-icon fa fa-${this.state.activeMessage ===
								''
									? 'thumbs-up'
									: 'play'}`}
								onClick={this.handlePlayClick}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Chat;
