import * as React from "react";

interface Props {
  url: string;
  size: {
    width: number;
    height: number;
  };
  selected: boolean;
}

export class SelectableIcon extends React.Component<Props> {
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
      <div style={{position: "relative"}}>
        {this.props.selected && this.createCheckIcon()}
        <div style={style}>
          <img src={url} width={width} height={height}></img>
        </div>
      </div>
    );
  }

  private createCheckIcon() {
    const check: React.CSSProperties = {
      backgroundImage: "url(./images/check.ico)",
      backgroundSize: "50px",
      position: "absolute",
      top: "0",
      right: "0",
      padding: "25px"
    };
    return <span style={check}></span>;
  }
}
