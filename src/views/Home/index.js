//@flow

// import modules
import React, { useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

// styles, components
import {
    Container,
    LabelSend,
    ButtonSend,
    WidthTitle,
    WidthContent,
    LabelText,
    LabelView,
    HeaderView,
    ButtonHeader,
    SendView,
    LabelInput,
} from './styles';

// types
import ScrolledView from '../components/ScrolledView';
import InputForm from '../components/InputForm';

const Home = () => {
    // states

    // referencia do formulario
    const formRef = useRef(null);
    const sheetRef = useRef(null);

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

    return (
        <>
            <ScrolledView
                urlApi="posts?_expand=user"
                itemHeader={
                    <HeaderView>
                        <LabelView>
                            <LabelText>Gear Feed</LabelText>
                        </LabelView>
                        <ButtonHeader onPress={() => sheetRef.current.open()}>
                            <Icon name="send" size={30} color="#22b5f9" />
                        </ButtonHeader>
                    </HeaderView>
                }
            />
            <RBSheet
                ref={sheetRef}
                height={350}
                duration={250}
                closeOnDragDown={true}
                animationType="fade">
                <Container>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <WidthTitle>
                            <LabelInput>Titulo</LabelInput>
                            <InputForm
                                nameUnForm="title"
                                placeholder="Manda uma prévia ai!"
                                backdroundHint="#fff"
                                borderColor="#f7f7f7"
                            />
                        </WidthTitle>
                        <WidthContent>
                            <LabelInput>Conteudo</LabelInput>
                            <InputForm
                                nameUnForm="content"
                                placeholder="Em que está pensando ?"
                                backdroundHint="#fff"
                                borderColor="#f7f7f7"
                                multiline={true}
                                linesNumber={2}
                                contentHeight={80}
                                alingContent="flex-start"
                            />
                        </WidthContent>
                        <SendView>
                            <ButtonSend
                                onPress={() => formRef.current.submitForm()}>
                                <LabelSend>Postar</LabelSend>
                            </ButtonSend>
                        </SendView>
                    </Form>
                </Container>
            </RBSheet>
        </>
    );
};

export default Home;
