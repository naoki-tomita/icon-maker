import * as React from "react";

interface Props {
  url: string;
  size: {
    width: number;
    height: number;
  };
}

export class Icon extends React.Component<Props> {
  public render() {
    const { url, size } = this.props;
    const { width, height } = size;
    const style = {
      margin: "5px",
      padding: "5px",
      border: "solid 3px #0000ff",
      borderRadius: "10px",
      textAlign: "center",
    };
    return (
      <div style={style}>
        <img src={url} width={width} height={height}></img>
      </div>
    );
  }
}
