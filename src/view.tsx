import { IProps } from "./model";

export function View(props: IProps) {
    return (
        <div>
            <form onSubmit={props.new_time} onReset={props.action_reset} >
                <div>
                    <input
                        name="time"
                        type="number"
                        value={props.form_data.time}
                        onChange={props.handleChange}
                    />

                </div>
                <div>
                    {
                        props.form_errors.time
                    }
                </div>
                <button type="submit">Start</button>
                <button type="reset">Press double click to Reset</button>
                <button type="button" onClick={props.action_pause}>Pause</button>
            </form>
            <h2>{props.time}</h2>
        </div>
    )
}