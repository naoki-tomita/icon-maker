import * as React from "react";
import { Canvas } from "./Canvas";
import { ImageList } from "./ImageList";

const images = [ 
  "image01.jpg", 
  "image02.ico", 
  "image03.ico", 
  "image04.png",
  "image01.jpg", 
  "image02.ico", 
  "image03.ico", 
  "image04.png",
  "image01.jpg", 
  "image02.ico", 
  "image03.ico", 
  "image04.png",
  "image01.jpg", 
  "image02.ico", 
  "image03.ico", 
  "image04.png", 
].map(i => `./images/${i}`);
const imageSize = { width: 100, height: 100 };

export class Application extends React.Component {
  public render() {
    return (
      <div>
        <Canvas width={256} height={256} updateCanvas={this.updateCanvas}></Canvas>
        <ImageList images={images} iconSize={imageSize}></ImageList>
      </div>
    );
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
