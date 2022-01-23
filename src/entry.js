import React from 'react';

export class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.category,
      bars: ["Intellect", "Looks", "Wealth", "Health", "Charisma", "Happiness"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.preventBadPaste = this.preventBadPaste.bind(this);
  }
    
  handleChange(e) {
    const newEntry = e.target.value;
    this.props.onChange(newEntry);
  }

  preventBadPaste(e) {
    const category = this.state.category;
    if (category === "Age") {
      var num = e.clipboardData.getData('text');
      num = e.target.value + num;
      num = parseInt(num)
      if (num < 0 || num > 120) {
        e.preventDefault();
      }
    }
  }

  render() {
    const category = this.state.category;
    var type = "text"
    var value = ""
    var min = "0";
    var max = "0";
    if (category === "Age") {
      type = "number"
      max = "120";
    } else if (this.state.bars.includes(category)) {
      type = "range"
      max = "10";
      value = "5";
    } else if (category === "3x3") {
      type = "file";
    }
    return (
      <div>
        <h3>Enter {category}:</h3>
        <input 
        onChange={this.handleChange} 
        type={type} min={min} max={max} defaultValue={value} />
      </div>
    );
  }
}