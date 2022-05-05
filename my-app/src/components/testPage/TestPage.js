import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './TestPage.scss'

const TestPage = () => {
    return (
        <Formik
            initialValues = {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false,
            }}

            validationSchema = {Yup.object({
                name: Yup.string().min(2, 'мінімум 2 символа')
                        .required('обовязкове поле'),
                email: Yup.string().email('не вірний email')
            })}

            onSubmit={ values => console.log(JSON.stringify(values, null, 2))}
        >
        <Form className="form">
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <Field
                id="name"
                name="name"
                type="text"
            />
            <ErrorMessage className='error' name='name' component={'div'}/>

            <label htmlFor="email">Ваша почта</label>
            <Field
                id="email"
                name="email"
                type="email"
            />
            <ErrorMessage className='error' name='email' component={'div'}/>

            <label htmlFor="amount">Количество</label>
            <Field
                id="amount"
                name="amount"
                type="number"
               
            />

            <label htmlFor="currency">Валюта</label>
            <Field
                id="currency"
                name="currency"
                as="select"
                >
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </Field>
            <label htmlFor="text">Ваше сообщение</label>
            <Field 
                id="text"
                name="text"
                as="textarea"
            />
            <label className="checkbox">
                <input name="terms" type="checkbox" 
               
                />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            <button type="submit">Отправить</button>
        </Form>
        </Formik>
    )
}

export default TestPage;