import * as React from "react";
import { Icon } from "./Icon";

interface Props {
  iconSize: {
    width: number;
    height: number;
  };
  images: string[];
}

export class ImageList extends React.Component<Props> {  
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
    return images.map((image, i) => this.createImageComponent(image, i));
  }

  private createImageComponent(image: string, i: number) {
    const size = this.props.iconSize;
    return <Icon url={image} size={size} key={i}></Icon>
  }
}
