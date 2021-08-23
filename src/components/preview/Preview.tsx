import React, { Component } from "react";
import get from "lodash/get";
import attempt from "lodash/attempt";
import isError from "lodash/isError";
import "./styles.scss";

const responseTypes = {
  json: "application/json",
  image: "image/jpeg"
};

interface Props {
  url: string;
}

class Preview extends Component<Props> {
  state = {
    url: "",
    longUrl:"",
    blob: null,
    errorText: ""
  };
  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.url !== prevState.url) {
      return {
        url: nextProps.url,
        longUrl:nextProps.longUrl
      };
    }
    return null;
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.url !== this.state.url) {
      this.fetchImageData();
    }
  }

  fetchImageData = async () => {
    fetch(`${this.state.url}?format=1`) // ?format=1 for set Content-type: application/json
      .then(response => response.blob())
      .then(blob => {
        this.setState({ blob });
      });
  };
  onError = () => {};
  onLoad = () => {};
  renderPreviewImage = (blob: any) => {
    const objectURL = URL.createObjectURL(blob);
    return (
      <img
        src={objectURL}
        alt="preview-result"
        onError={this.onError}
        onLoad={this.onLoad}
      />
    );
  };
  setErrorText = (msg: string) => {
    if (this.state.errorText !== msg) {
      this.setState({
        errorText: msg
      });
    }
  };
  renderErrorMessage = (blob: any) => {
    const reader = new FileReader();
    reader.onload = (data: any) => {
      const objResponse = attempt(
        (json: string) => JSON.parse(json),
        get(data, "target.result")
      );
      if (isError(objResponse)) {
        this.setErrorText("Unexpected error");
      } else {
        this.setErrorText(get(objResponse, "message", "Undefined error"));
      }
    };
    reader.readAsText(blob);
    return <span className="error-message">{this.state.errorText}</span>;
  };
  render() {
    const { url,longUrl, blob } = this.state;
    if (!url || !blob) {
      return null;
    }
    const responseType = get(blob, "type");
    let preview = null;
    if (responseType === responseTypes.image) {
      preview = this.renderPreviewImage(blob);
    }
    if (responseType === responseTypes.json) {
      preview = this.renderErrorMessage(blob);
    }
    return (
      <div className="preview">
        <span className="section-label">Live Preview</span>
        {preview}
        {responseType === responseTypes.image && (
          <span className="url">{url}</span>
        )}
        {responseType === responseTypes.image && (
          <span className="url">{longUrl}</span>
        )}
        
      </div>
    );
  }
}

export default Preview;
