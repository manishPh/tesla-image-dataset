import React from 'react';

const FACTOR = 0.5;

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imgWidth: 1000, imgHeight: 500, visible: false };
    }
    onImageLoad = ({ target }) => {
        this.setState({
            imgWidth: target.naturalWidth * FACTOR,
            imgHeight: target.naturalHeight * FACTOR,
            visible: true,
        });
    };

    render() {
        const { imageName, top, left, width, height, label } = this.props.image;
        const { imgWidth, imgHeight, visible } = this.state;
        const parsedTop = parseInt(top, 10) * FACTOR;
        const parsedLeft = parseInt(left, 10) * FACTOR;
        const parsedWidth = parseInt(width, 10) * FACTOR;
        const parsedHeight = parseInt(height, 10) * FACTOR;
        const styleObj = { visibility: visible ? 'visible' : 'hidden', backgroundColor: 'oldlace' };

        const labelStyleObj = {
            position: 'absolute',
            top: parsedTop - 30,
            left: parsedLeft,
        };
        const highlightStyleObj = {
            position: 'absolute',
            top: parsedTop,
            left: parsedLeft,
            width: parsedWidth,
            height: parsedHeight,
        };
        return (
            <div className='image'>
                <div>
                    {visible && (
                        <div className='label' style={labelStyleObj}>
                            {label}
                        </div>
                    )}
                    {visible && <div className='highlight' style={highlightStyleObj}></div>}
                    <img
                        width={imgWidth}
                        height={imgHeight}
                        src={`./images/${imageName}`}
                        alt={imageName}
                        title={imageName}
                        onLoad={this.onImageLoad}
                        style={styleObj}
                    />
                </div>
            </div>
        );
    }
}
export default Image;
