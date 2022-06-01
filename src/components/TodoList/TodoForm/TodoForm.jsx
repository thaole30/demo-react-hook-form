import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../form-controls/InputField';
import "./TodoForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};




function TodoForm(props) {
    
    const schema = yup.object().shape({
        title: yup.string().required('Please enter your title'),
      }).required();
      
    const form = useForm({
        mode: 'onChange',
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    })

    const handleSubmitTodo = (values) => {
        console.log("form submit", values);
    }

    return (
        <form className="todoform" onSubmit={form.handleSubmit(handleSubmitTodo)}>
            <InputField form={form} name="title" label="Enter your todo"/>
        </form>
    );
}

export default TodoForm;