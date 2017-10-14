import * as React from "react";

interface Props {
  width: number;
  height: number;
  updateCanvas: (context: CanvasRenderingContext2D) => void;
}

export class Canvas extends React.Component<Props> {
  public refs: {
    canvas: HTMLCanvasElement;
  };

  componentDidMount() {
    this.updateCanvas();
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props !== nextProps) {
      this.updateCanvas();
    }
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  public updateCanvas() {
    const { canvas } = this.refs;
    const context = canvas.getContext("2d");
    if (context) {
      this.props.updateCanvas(context);
    }
  }

  public render() {
    return <canvas ref="canvas" width={this.props.width} height={this.props.height}></canvas>;
  }
}
