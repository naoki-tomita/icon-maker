import * as React from "react";
import { Canvas } from "./Canvas";

export class Application extends React.Component {
  public render() {
    return <Canvas width={256} height={256} updateCanvas={this.updateCanvas}></Canvas>;
  }

  private updateCanvas = (context: CanvasRenderingContext2D) => {
    context.fillStyle = 'red';
    context.font = '24px Arial';
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.clearRect(0, 0, 256, 256);
    context.fillText("Hello World", 0, 0);
  }
}
