import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (<div className="center" style={{ width: '100%', height: '100%', backgroundColor: '#ecdede', opacity: '0.8', position: 'absolute', zIndex: '1000' }}>
      <div style={{ zIndex: '10000', top: '40%' }} className="preloader-wrapper big active">
        <div className="spinner-layer spinner-green">
          <div className="circle-clipper left">
            <div className="circle" />
          </div><div className="gap-patch">
            <div className="circle" />
          </div><div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>

        <div className="spinner-layer spinner-black">
          <div className="circle-clipper left">
            <div className="circle" />
          </div><div className="gap-patch">
            <div className="circle" />
          </div><div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>

        <div className="spinner-layer spinner-green">
          <div className="circle-clipper left">
            <div className="circle" />
          </div><div className="gap-patch">
            <div className="circle" />
          </div><div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>

        <div className="spinner-layer spinner-black">
          <div className="circle-clipper left">
            <div className="circle" />
          </div><div className="gap-patch">
            <div className="circle" />
          </div><div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Loading;
