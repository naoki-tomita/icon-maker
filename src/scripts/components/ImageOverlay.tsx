import * as React from "react";
import { Canvas } from "./Canvas";

type ImageUrl = string;

interface Props {
  width: number;
  height: number;
  images: ImageUrl[];
}

export class ImageOverlay extends React.Component<Props> {
  public render() {
    return <Canvas width={this.props.width} height={this.props.height} updateCanvas={this.updateCanvas}></Canvas>;
  }

  private updateCanvas = (context: CanvasRenderingContext2D) => {
    const { width, height } = this.props;
    this.props.images.map(i => {
      const im = new Image();
      im.src = i;
      return im;
    }).forEach((i) => {
      i.onload = () => {
        context.drawImage(i, 0, 0, width, height);
      };
    });
  }
}
