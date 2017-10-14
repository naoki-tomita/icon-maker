import * as React from "react";
import { ImageOverlay } from "./ImageOverlay";
import { ImageList } from "./ImageList";

const images = [
  "image01.jpg",
  "image02.ico",
  "image03.ico",
  "image04.png",
].map(i => `./images/sample/${i}`);
const imageSize = { width: 100, height: 100 };

interface State {
  images: string[];
  selectedImages: string[];
}

export class Application extends React.Component<{}, State> {
  constructor(p: {}) {
    super(p);
    this.state = {
      images: images,
      selectedImages: []
    };
  }

  public render() {
    return (
      <div>
        <ImageOverlay width={256} height={256} images={this.state.selectedImages}></ImageOverlay>
        <ImageList images={images} iconSize={imageSize} selectedImagesUpdated={this.selectedImagesUpdated}></ImageList>
      </div>
    );
  }

  private selectedImagesUpdated = (images: string[]) => {
    this.setState({
      selectedImages: images
    });
  }
}
