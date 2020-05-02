//@flow

// import modules
import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

// styles, components
import {
    Container,
    AddPostView,
    ButtonSend,
    WidthTitle,
    WidthContent,
    WidthDirection,
    LabelText,
    LabelView,
} from './styles';

// types
import { FormatPost } from '../Profile';
import ScrolledView from '../components/ScrolledView';
import TilePost from '../components/TilePost';
import InputForm from '../components/InputForm';
import BottomSheet from '../components/BottomSheetAtion';

const Home = () => {
    // states
    const [feed, setFeed] = useState<FormatPost[]>(null);
    const [postId, setPostId] = useState<Number>(0);

    // referencia do formulario
    const formRef = useRef(null);
    const bottomSheetRef = useRef(null);

    /**
     * Funçao submit
     *  com validaçao utilizando YUP
     * @param {object} data passado pelo UNFROM
     */
    async function handleSubmit(data) {
        try {
            const schema = Yup.object().shape({
                title: Yup.string()
                    .min(5)
                    .max(30)
                    .required(),
                content: Yup.string()
                    .min(10)
                    .max(280)
                    .required(),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            // clear error log
            formRef.current.setErrors({});

            // Validation passed
            console.log(data);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const validationErrors = {};
                if (err instanceof Yup.ValidationError) {
                    // Validation failed
                    err.inner.forEach(error => {
                        validationErrors[error.path] = error.message;
                        // resetando o campo invalido
                        formRef.current.clearField(error.path);
                    });
                    formRef.current.setErrors(validationErrors);
                }
            }
        }
    }

    // action CRUD post
    async function bottomSheet(id) {
        await setPostId(id);
        bottomSheetRef.current.show();
    }

    return (
        <ScrolledView setState={setFeed} urlApi="posts?_expand=user">
            <Container>
                <AddPostView>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <LabelView>
                            <WidthTitle>
                                <InputForm
                                    nameUnForm="title"
                                    placeholder="Manda uma prévia ai!"
                                    backdroundHint="#fff"
                                    borderColor="#22B5F9"
                                />
                            </WidthTitle>
                            <LabelText>Gear Feed</LabelText>
                        </LabelView>
                        <WidthDirection>
                            <WidthContent>
                                <InputForm
                                    nameUnForm="content"
                                    placeholder="Em que está pensando ?"
                                    backdroundHint="#fff"
                                    borderColor="#22B5F9"
                                />
                            </WidthContent>
                            <ButtonSend
                                onPress={() => formRef.current.submitForm()}>
                                <Icon name="send" color="#ff6781" size={30} />
                            </ButtonSend>
                        </WidthDirection>
                    </Form>
                </AddPostView>
                {feed &&
                    feed.map(t => (
                        <TilePost key={t.date} data={t} onPress={bottomSheet} />
                    ))}
                <BottomSheet bottomSheetRef={bottomSheetRef} stateId={postId} />
            </Container>
        </ScrolledView>
    );
};

export default Home;
