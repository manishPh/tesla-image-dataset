import React, { Component } from 'react';

import { CSVReader } from 'react-papaparse';

const buttonRef = React.createRef();

export default class CSVParser extends Component {
    handleOpenDialog = (e) => {
        if (buttonRef.current) {
            buttonRef.current.open(e);
        }
    };

    handleOnFileLoad = (data) => {
        console.log(data);
    };

    handleOnError = (err) => {
        console.log(err);
    };

    handleOnRemoveFile = (data) => {
        console.log('File removed');
    };

    handleRemoveFile = (e) => {
        if (buttonRef.current) {
            buttonRef.current.removeFile(e);
        }
    };

    render() {
        return (
            <CSVReader
                ref={buttonRef}
                onFileLoad={this.handleOnFileLoad}
                onError={this.handleOnError}
                noClick
                noDrag
                onRemoveFile={this.handleOnRemoveFile}
            >
                {({ file }) => (
                    <aside
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: 10,
                        }}
                    >
                        <button
                            type='button'
                            onClick={this.handleOpenDialog}
                            style={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                width: '40%',
                                paddingLeft: 0,
                                paddingRight: 0,
                            }}
                        >
                            Browe file
                        </button>
                        <div
                            style={{
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: '#ccc',
                                height: 45,
                                lineHeight: 2.5,
                                marginTop: 5,
                                marginBottom: 5,
                                paddingLeft: 13,
                                paddingTop: 3,
                                width: '60%',
                            }}
                        >
                            {file && file.name}
                        </div>
                        <button
                            style={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                paddingLeft: 20,
                                paddingRight: 20,
                            }}
                            onClick={this.handleRemoveFile}
                        >
                            Remove
                        </button>
                    </aside>
                )}
            </CSVReader>
        );
    }
}
