import React, { Fragment } from 'react'
import Header from '../../Components/Header/header'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    titulo: {
        textAlign: 'center',
        color: 'blue', 
        paddingTop: 80
    }
})

const Home = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Header />

            <Container maxWidth='sm'>
                <Typography
                    className={classes.titulo}
                    variant='h2'
                    component='h3'
                >
                    Sobre
                </Typography>
                <Typography 
                  variant='body1' 
                  component='h3'
                >
                    Você se logou!
                    Agora pode cadastrar um novo leilão ou editar os existentes.
                </Typography>
            </Container>
        </Fragment>
    )
}

export default Home;