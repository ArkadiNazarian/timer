import *as yup from 'yup';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useFormik } from 'formik';
import { IFormValues, IProps } from "./model";
export const Timer = () => {
    const [current_time, set_time] = useState<number>(0);
    const [terminate, set_terminate] = useState<boolean>(false);

    const initial_values = {
        time: current_time
    } as IFormValues

    const validation_schema = yup.object().shape({
        time: yup.number().min(0).required()
    });

    const action_reset = () => {

        set_time(0)
        set_terminate(true)
    }

    const new_time = (values: IFormValues) => {
        set_terminate(false)
        set_time(values.time)
        console.log(values.time)
    }

    const action_pause = () => {

    }
    useLayoutEffect(() => {
        if (current_time > 0 && !terminate) {
            setTimeout(() => {
                if (!terminate) {
                    set_time(current_time - 1)
                } 
            }, 1000)
        }
    }, [current_time, terminate])


    const formik = useFormik({
        initialValues: initial_values,
        validationSchema: validation_schema,
        onSubmit: new_time,
        onReset: action_reset,
    });
    return {
        time: current_time,
        new_time: formik.handleSubmit,
        action_reset: formik.handleReset,
        action_pause,
        form_data: formik.values,
        form_errors: formik.errors,
        handleChange: formik.handleChange
    } as IProps
}