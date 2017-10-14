import * as React from "react";
import { Icon } from "./Icon";

interface SelectableImage {
  url: string;
  selected: boolean;
}

interface Props {
  iconSize: {
    width: number;
    height: number;
  };
  images: string[];
  selectedImagesUpdated: (images: string[]) => void
}

interface State {
  images: Array<SelectableImage>;
}

export class ImageList extends React.Component<Props, State> {
  private selectedImage: Array<{
    image: string;
    index: number;
  }> = [];
  constructor(props: Props) {
    super(props);
    this.state = {
      images: props.images.map(i => ({url: i, selected: false})),
    };
  }

  public componentWillReceiveProps(nextProps: Props) {
    const some = (idx: number) => this.selectedImage.some((i) => i.index === idx);
    this.setState({
      images: nextProps.images.map((i, idx) => ({url: i, selected: some(idx)})),
    });
  }

  public render() {
    const parentStyle: React.CSSProperties = {
      display: "flex",
      flexWrap: "wrap",
      // justifyContent: "space-between",
      border: "solid 1px black",
    };

    return (
      <div style={parentStyle}>
        {this.createImageList(this.state.images)}
      </div>
    );
  }

  private createImageList(images: SelectableImage[]) {
    return images.map((image, i) => 
      <div
        style={{position: "relative"}}
        onClick={this.selectImage.bind(this, i)} 
        key={i}>
          {image.selected && this.createCheckIcon()}
          {this.createImageComponent(image.url)}
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

  private createImageComponent(image: string) {
    const size = this.props.iconSize;
    return <Icon url={image} size={size}></Icon>
  }

  private flipSelected(i: number) {
    const { images } = this.state;
    images[i] = {
      url: images[i].url,
      selected: images[i].selected === false,
    };
    this.setState({
      images,
    });
  }

  private selectImage = (i: number) => {
    const index = this.selectedImage.findIndex(im => im.index === i);
    if (index !== -1) { // found item
      // remove
      this.selectedImage.splice(index, 1);
    } else { // not found
      // add
      this.selectedImage.push({ image: this.state.images[i].url, index: i });
    }
    this.flipSelected(i);
    setTimeout(() => this.props.selectedImagesUpdated(this.selectedImage.map(im => im.image)));
  }
}
