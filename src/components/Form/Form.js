import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      urlInput: "",
      nameInput: "",
      priceInput: "",
      inventory: []
    };
  }

  componentDidMount() {
    axios.get("/api/products").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  addProduct() {
    let body = {
      urlInput: this.state.urlInput,
      nameInput: this.state.nameInput,
      priceInput: this.state.priceInput
    };

    !body.urlInput
      ? alert("please select a url")
      : axios.post("/api/products", body).then(res => {
          this.setState({
            inventory: res.data,
            urlInput: "",
            nameInput: "",
            priceInput: ""
          });
          console.log("we got here");
        });
  }

  cacelButtonMethod() {
    this.setState({
      urlInput: "",
      nameInput: "",
      priceInput: ""
    });
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.urlInput}
            onChange={e => this.setState({ urlInput: e.target.value })}
          />
          <input
            value={this.state.nameInput}
            onChange={e => this.setState({ nameInput: e.target.value })}
          />
          <input
            value={this.state.priceInput}
            onChange={e => this.setState({ priceInput: e.target.value })}
          />

          <button onClick={() => this.cacelButtonMethod()}>Cancel</button>
          <button onClick={() => this.addProduct()}>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;
