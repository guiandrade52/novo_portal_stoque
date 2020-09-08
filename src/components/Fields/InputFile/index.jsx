import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
import { inputFileActions } from '../../../redux-flow/_actions/inputFile.actions';
import { bindActionCreators } from 'redux'

//Material Ui
import { Button } from '@material-ui/core';

//Component Core
import CardFile from './card';
import { GridContainer, GridItem } from '../../Grids';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import AddBoxIcon from '@material-ui/icons/AddBox'
import CloseIcon from '@material-ui/icons/Close'


import imgFile from '../../../assets/img/file.png'
import { Divider } from 'semantic-ui-react';

class InputFile extends Component {

    handleAdd = () => {
        this.props.add(this.input.files)
    }

    handleRemove = name => {
        this.props.remove(name)
        this.input.value = ''
    }

    handleRemoveAll = () => {
        this.props.removeAll()
        this.input.value = ''
    }

    render() {
        const { files } = this.props
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Button
                        variant="contained"
                        component="label"
                        color={files.length > 0 ? 'primary' : 'default'}
                    >
                        {files.length > 0 ? <AddBoxIcon /> : <CloudUploadIcon />}
                        <input
                            type="file"
                            style={{ display: "none" }}
                            ref={el => (this.input = el)}
                            multiple
                            onChange={this.handleAdd}
                        />
                    </Button>

                    {files.length > 0 &&
                        <Button
                            variant="text"
                            component="label"
                            style={{ marginLeft: 10, color: 'red' }}
                            onClick={this.handleRemoveAll}
                        >
                            <CloseIcon />
                        </Button>
                    }


                    {files.length > 0 && <Divider />}
                </GridItem>
                {
                    files.map((item, index) => {
                        if (item.type.match('image.*'))
                            return <CardFile
                                key={index}
                                handleRemove={() => this.handleRemove(item.name)}
                                image={URL.createObjectURL(item)}
                                title={item.name}
                                size={item.size}
                            />
                        return <CardFile
                            key={index}
                            image={imgFile}
                            handleRemove={() => this.handleRemove(item.name)}
                            title={item.name}
                            size={item.size}
                        />

                    })
                }
            </GridContainer>
        )
    }
}

const mapStateToProps = state => ({ files: state.inputFiles })

const mapDispatchToProps = dispatch => bindActionCreators(inputFileActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InputFile)