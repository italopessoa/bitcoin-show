import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component to display child element that need loading animation
 */
const LoadingPanel = props => (
  <div>
    <div style={{
      backgroundColor: props.backgroundColor,
      width: props.loading ? '100%' : '0',
      height: props.loading ? '100%' : '0',
      zIndex: props.loading ? '1000' : '-1000',
      position: 'absolute',
      opacity: props.opacity,
    }}
    >
      <div style={{ zIndex: '10000', display: props.loading ? 'block' : 'none', top: '40%', left: '40%' }} className="preloader-wrapper big active">
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

        <div className="spinner-layer spinner-yellow">
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
    </div>
    {props.children}
  </div >
)


LoadingPanel.propTypes = {
  loading: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
  opacity: PropTypes.number,
}

LoadingPanel.defaultProps = {
  backgroundColor: '#FFF',
  opacity: 0,
}

export default LoadingPanel
