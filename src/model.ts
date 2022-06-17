import { FormikErrors } from "formik"

export interface IFormValues{
    time:number,
    
}

export interface IProps{
    time:number,
    new_time:()=>void,
    action_reset:()=>void,
    action_pause:()=>void,
    form_data:IFormValues,
    form_errors:FormikErrors<IFormValues>,
    handleChange:()=>void
}