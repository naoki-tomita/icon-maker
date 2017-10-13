import * as React from "react";
import { Icon } from "./Icon";

interface Props {
  iconSize: {
    width: number;
    height: number;
  };
  images: string[];
  selectedImagesUpdated: (images: string[]) => void
}

export class ImageList extends React.Component<Props> {
  private selectedImage: Array<{
    image: string;
    index: number;
  }> = [];
  public render() {
    const parentStyle: { [ key:string ]: string } = {
      display: "flex",
      flexWrap: "wrap",
      // justifyContent: "space-between",
      border: "solid 1px black",
    };

    return (
      <div style={parentStyle}>
        {this.createImageList(this.props.images)}
      </div>
    );
  }

  private createImageList(images: string[]) {
    return images.map((image, i) => <div onClick={this.selectImage.bind(this, i)} key={i}>{this.createImageComponent(image)}</div>);
  }

  private createImageComponent(image: string) {
    const size = this.props.iconSize;
    return <Icon url={image} size={size}></Icon>
  }

  private selectImage = (i: number) => {
    const index = this.selectedImage.findIndex(im => im.index === i);
    if (index !== -1) { // found item
      // remove
      this.selectedImage.splice(index, 1);
    } else { // not found
      // add
      this.selectedImage.push({ image: this.props.images[i], index: i });
    }
    this.props.selectedImagesUpdated(this.selectedImage.map(im => im.image));
  }
}
