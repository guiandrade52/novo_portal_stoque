import React from 'react'

//Redux
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'

//Material UI
import { Typography, Chip, Avatar } from '@material-ui/core';

const Resumo = ({ usuarioPortal, contratos, parceiroAt }) => {
    return (
        <div>
            <Typography variant='h6' align={'center'}>Vinculo de contratos</Typography>
            {usuarioPortal && <Typography>O usuário <strong>{usuarioPortal.label}</strong> será vinculado ao contrato</Typography>}
            <div>
                {contratos &&
                    <Chip
                        avatar={<Avatar>C</Avatar>}
                        label={`${contratos.label}`}
                        style={{ margin: 5 }}
                    />
                }
            </div>
            <Typography>E poderá ver ocorrências do(s) seguinte(s) parceiro(s) respeitando o filtro do contrato acima</Typography>
            <div>
                {parceiroAt &&
                    parceiroAt.map((item, key) => {
                        return <Chip
                            key={key}
                            avatar={<Avatar>P</Avatar>}
                            label={`${item.label}`}
                            style={{ margin: 5 }}
                        />
                    })
                }
            </div>
        </div>
    )
}

const selector = formValueSelector('formVincularContrato')

const mapStateToProps = state => ({
    parceiroAb: selector(state, 'parceiroAb'),
    usuarioPortal: selector(state, 'usuarioPortal'),
    contratos: selector(state, 'contrato'),
    parceiroAt: selector(state, 'parceiroAt'),
})

export default connect(mapStateToProps)(Resumo)