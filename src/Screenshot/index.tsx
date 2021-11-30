import React, { Component, Fragment } from 'react';
import { ScreenCapture } from 'react-screen-capture';

// import './style.css';

class CaptureScreenshot extends Component <unknown,unknown>{
  state = {
    screenCapture: '',
  };

  handleScreenCapture = (screenCapture:string) => {
    console.log('screenCapture----------',screenCapture);
    
    this.setState({ screenCapture });
    return null;
  };

  handleSave = () => {
    const screenCaptureSource = this.state.screenCapture;
    const downloadLink = document.createElement('a');
    const fileName = 'react-screen-capture.png';

    downloadLink.href = screenCaptureSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  render() {
    const { screenCapture } = this.state;
    console.log(screenCapture);
    return (
      <ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <>
          <Fragment>
<div className="container">
  <h1>Capture Screenshot</h1>
          <p>What is Lorem Ipsum?</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p></p>
<p>Why do we use it?</p>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
<p></p>
<p></p>
<p>Where does it come from?</p>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>
<p></p>
<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Maloru by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
<p></p>
</div>
           
          </Fragment>
           <p className='capture-btn'><button onClick={onStartCapture} >Capture</button></p> 
            <br/>
            <br/>
            <img className={screenCapture ? 'screenshot':''}  src={screenCapture} />
            <p><button onClick={this.handleSave}>Download image</button></p> 
        </>
      )}
      </ScreenCapture>
    );
  }
}

export default CaptureScreenshot;
