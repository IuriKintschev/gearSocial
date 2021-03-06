//@flow

// imports modules
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { StatusBar, Platform, FlatList } from 'react-native';
import Snackbar from 'react-native-snackbar';

//services
import Api from '../../../services/api';

// helpers
import { sortArrByDate } from '../../../helpers/dateToScreen';

// styles, compoenents
import { Container } from './styles';
import TilePost from '../../components/TilePost';
import BottomSheet from '../../components/BottomSheetAtion';

// types
import { FormatPost } from '../../Profile';
type Props = {
    urlApi: String,
    itemHeader?: React.Component,
    reloadExterno?: Boolean,
};

const ScrolledView = ({ itemHeader, urlApi, reloadExterno }: Props) => {
    // states
    const [loadControl, setLoadControl] = useState<boolean>(false);
    const [posts, setPosts] = useState<FormatPost[]>([]);
    const [postId, setPostId] = useState<Number>(0);

    // references
    const bottomSheetRef = useRef(null);

    // controle do reload a api
    const onLoadPost = useCallback(() => {
        setLoadControl(true);

        // buscando statae
        Api.get(urlApi)
            .then(({ data }) => setPosts(data.sort(sortArrByDate)))
            .catch(err => logApiErr(err));

        setLoadControl(false);
    }, [urlApi, setLoadControl]);

    useEffect(() => {
        onLoadPost();
    }, [onLoadPost, reloadExterno]);

    // log de erro se nao houver conexao
    function logApiErr(err) {
        Snackbar.show({
            text: 'Verifique sua conexão com a API!',
            backgroundColor: '#e66e78',
            duration: Snackbar.LENGTH_LONG,
        });
        console.log(err);
    }

    // filho efetuando reload
    function reloadChild() {
        onLoadPost();
    }

    // action CRUD post
    async function bottomSheet(id) {
        await setPostId(id);
        bottomSheetRef.current.show();
    }

    return (
        <>
            <StatusBar
                // config statausbar
                barStyle={
                    Platform.OS === 'android' ? 'light-content' : 'dark-content'
                }
                backgroundColor={Platform.OS === 'android' && '#222'}
            />
            <Container>
                <FlatList
                    ListHeaderComponent={itemHeader}
                    data={posts}
                    keyExtractor={(i: FormatPost) => i.id.toString()}
                    renderItem={({ item }) => (
                        <TilePost data={item} onPress={bottomSheet} />
                    )}
                    // logica para esconder status bar END
                    onRefresh={onLoadPost}
                    refreshing={loadControl}
                />
                <BottomSheet
                    bottomSheetRef={bottomSheetRef}
                    reloadChild={reloadChild}
                    stateId={postId}
                />
            </Container>
        </>
    );
};

export default ScrolledView;
