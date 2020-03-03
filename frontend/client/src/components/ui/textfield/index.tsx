import * as React from 'react';
import {IFormControlError} from '../../../modules/form-module/shared';

interface IProps {
    value?: string;
    onChange?(event: React.ChangeEvent): void;
    error?: IFormControlError;
}

const TextField = (props: IProps) => {
    const {
        value = '',
        error = null
    } = props;

    return(
        <div>
            <input value={value} onChange={props.onChange ? props.onChange : () => {}}/>
            {error && <div>{error}</div>}
        </div>
    );
};

export default TextField;