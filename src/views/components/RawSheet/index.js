//@flow

import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

// styles, components
import {
    Container,
    LabelSend,
    ButtonSend,
    WidthTitle,
    WidthContent,
    SendView,
    LabelInput,
} from './styles';
import InputForm from '../InputForm';

// types
type Props = {
    formRef: React.Ref,
    sheetRef: React.Ref,
    functionSubmit: Function,
};

const RawSheet = ({ formRef, sheetRef, functionSubmit }: Props) => {
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
            functionSubmit(data);
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
    );
};

export default RawSheet;
