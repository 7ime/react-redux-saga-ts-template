import * as React from 'react';
import BemShaper from '../../../../../bem/bem-shaper';
import {EBemClassNames} from '../../../../../bem/bem-class-names';
import withInput from '../../hoc-helpers/with-input';
import {ITextField} from '../../model';

const bem = new BemShaper(EBemClassNames.textfield);

interface IProps {
    innerRef: React.RefObject<HTMLInputElement>;
    value: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): unknown;
    isFocused: boolean;
    clearValue(): unknown;
}

const Input = (props: IProps) => {
    const {innerRef, isFocused, clearValue, ...dynamicProps} = props;

    const classNames = [
        bem.elem('control'),
        bem.elem('control', 'input')
    ].join(' ').trim();

    return (
        <React.Fragment>
            <input
                {...dynamicProps}
                ref={innerRef}
                type='text'
                className={classNames}
            />
            {
                isFocused && (
                    <div className={bem.elem('triggers')}>
                        <div
                            onMouseDown={clearValue}
                            className={[
                                bem.elem('trigger'),
                                bem.elem('trigger', 'clear'),
                            ].join(' ').trim()} />
                    </div>
                )
            }
        </React.Fragment>
    );
};

export default withInput<ITextField.InputProps>(Input);