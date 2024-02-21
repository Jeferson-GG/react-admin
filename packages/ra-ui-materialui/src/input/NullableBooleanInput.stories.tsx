import * as React from 'react';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';

import { AdminContext } from '../AdminContext';
import { Create } from '../detail';
import { SimpleForm } from '../form';
import { NullableBooleanInput } from './NullableBooleanInput';
import { FormInspector } from './common';

export default { title: 'ra-ui-materialui/input/NullableBooleanInput' };

export const Basic = () => (
    <Wrapper>
        <NullableBooleanInput source="published" />
    </Wrapper>
);

export const Disabled = () => (
    <Wrapper>
        <NullableBooleanInput source="published" disabled />
    </Wrapper>
);

export const ReadOnly = () => (
    <Wrapper>
        <NullableBooleanInput source="published" readOnly />
    </Wrapper>
);

const i18nProvider = polyglotI18nProvider(() => englishMessages);

const Wrapper = ({ children, onSuccess = console.log }) => (
    <AdminContext i18nProvider={i18nProvider}>
        <Create resource="posts" mutationOptions={{ onSuccess }}>
            <SimpleForm>
                {children}
                <FormInspector name="published" />
            </SimpleForm>
        </Create>
    </AdminContext>
);
