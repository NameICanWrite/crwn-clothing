import classes from './FormInput.module.scss'

import React from 'react'

const FormInput = ({handleChange, label, ...otherProps}) => {
	return (
		<div className={classes.container}>
			{
				label &&
				<label
					className={`${classes.label} ${otherProps.value.length && classes.shrink}`}
				>
					{label}
				</label>
			}
			<input className={classes.form_input} onChange={handleChange} {...otherProps} />
		</div>
	)
}

export default FormInput
