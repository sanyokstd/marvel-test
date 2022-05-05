import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';

import "./charSearchForm.scss"

const CharSearchForm = () => {

    const [charList, setCharList] = useState([])
    const {loading, error, getCharactersByName} = useMarvelService();
    const [initial, setInitial] = useState(true)

    const handleRequest = (name) => {
        getCharactersByName(name).then(res => charSetState(res))
    }

    const charSetState = (res) => {
        if(res.length > 0){
            const charArr = res.map(el => {
                return {id: el.id, name: el.name}
            })
            setCharList(charArr)
        }else{
            setCharList([])
        }

        setInitial(false)
    }

    const CharListView = () => {
       
            if(charList.length > 0){
                return (
                    <div className='char__search-wrapper'>
                    {
                        charList.map(({id, name}) => {
                            return(
                                <>
                                    <div className='char__search-success'>{name}</div>
                                    <Link className='button button__secondary' to={'/character/' + id} >
                                        <div className="inner">detail</div>
                                    </Link>
                                </>
                                
                            )
                        })
                    }
                    </div>
                )
            }else{
                return <div className='char__error'>Персонаж не знайдений</div>
            }
           
        
    }

    return(
        <div className="char__search-form">
            <Formik
            initialValues = {{
                charName: '',
            }}
            
            validationSchema = {Yup.object({
                charName: Yup.string().min(2, 'мінімум 2 символи')
                        .required('обовязкове поле'),
            })}

            onSubmit={ values => handleRequest(values.charName)}
            >
                <Form>
                    <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
                    <div className="char__search-wrapper">
                        <Field 
                            id="charName" 
                            name='charName' 
                            type='text' 
                            placeholder="Enter name"/>
                        <button 
                            type='submit' 
                            className="button button__main"
                            disabled={loading}
                        >
                            <div className="inner">find</div>
                        </button>
                    </div>
                    <ErrorMessage className='char__error' name='charName' component={'div'}/>
                    
                    {!initial ?  <CharListView/> : null} 
                </Form>
            </Formik>
                
        </div>
    )
}

export default CharSearchForm;