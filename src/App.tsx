import React from 'react';

export class App extends React.Component<{}, { pressedKey: string | null }> {
  state = {
    pressedKey: null,
  };

  handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <input
          className="App__input"
          onKeyUp={this.handleKeyUp}
          autoFocus
          style={{ opacity: 0, position: 'absolute' }}
        />

        {this.state.pressedKey === null ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        )}
      </div>
    );
  }
}
