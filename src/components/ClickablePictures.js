// import React, { Component } from 'react';

// class ClickablePicture extends Component {
//   state = { toggle: true };

//   toggleImage = () => {
//     this.setState({ toggle: !this.state.toggle });
//   };

//   render() {
//     const imgPath = this.state.toggle ? this.props.imgClicked : this.props.img;

//     return (
//       <div className="ClickablePicture">
//         <img src={imgPath} alt="ClickablePicture" onClick={this.toggleImage} />
//       </div>
//     );
//   }
// }

// export default ClickablePicture;
import React, { Component } from 'react';

export class ClickablePictures extends Component {
  state = {
    isGlass: false,
  };

  render() {
    return (
      <div>
        <img
          src={this.state.isGlass ? this.props.imgClicked : this.props.img}
          alt="maxence"
          onClick={() => this.setState({ isGlass: !this.state.isGlass })}
        />
      </div>
    );
  }
}

export default ClickablePictures;
