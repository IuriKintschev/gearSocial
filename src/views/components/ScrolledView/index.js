//@flow

// imports modules
import React, { useState, useCallback, useEffect } from 'react';
import { StatusBar, Platform, RefreshControl } from 'react-native';
import Snackbar from 'react-native-snackbar';

//services
import Api from '../../../services/api';

// helpers
import { ifCloseToTop } from '../../../helpers/scrollFunc';
import { sortArrByDate } from '../../../helpers/dateToScreen';

// styles, compoenents
import { Container, Scroled } from './styles';

type Props = {
    urlApi: String,
    setState: funtion,
    children: React.Component,
};

const ScrolledView = ({ children, setState, urlApi }: Props) => {
    // states
    const [statusHide, setStatusHide] = useState<boolean>(false);
    const [loadControl, setLoadControl] = useState<boolean>();

    // controle do reload a api
    const onLoadPost = useCallback(() => {
        setLoadControl(true);

        // buscando statae
        Api.get(urlApi)
            .then(({ data }) => setState(data.sort(sortArrByDate)))
            .catch(err => logApiErr(err));

        setLoadControl(false);
    }, [setState, urlApi]);

    useEffect(() => {
        onLoadPost();
    }, [onLoadPost]);

    // log de erro se nao houver conexao
    function logApiErr(err) {
        Snackbar.show({
            text: 'Verifique sua conexão com a API!',
            backgroundColor: '#e66e78',
            duration: Snackbar.LENGTH_LONG,
        });
        console.log(err);
    }

    return (
        <>
            <StatusBar
                // config statausbar
                barStyle={
                    Platform.OS === 'android' ? 'light-content' : 'dark-content'
                }
                backgroundColor={Platform.OS === 'android' && '#222'}
                // config statausbar END
                hidden={statusHide} // escontendo barra ao scrolar a tela
                showHideTransition="slide"
            />
            <Container>
                <Scroled
                    // logica para esconder status bar
                    onScroll={({ nativeEvent }) => {
                        if (ifCloseToTop(nativeEvent)) {
                            setStatusHide(false);
                        } else {
                            setStatusHide(true);
                        }
                    }}
                    // logica para esconder status bar END
                >
                    <RefreshControl
                        refreshing={loadControl}
                        onRefresh={onLoadPost}
                    />
                    {children}
                </Scroled>
            </Container>
        </>
    );
};

export default ScrolledView;
