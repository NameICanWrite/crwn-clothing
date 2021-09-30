import classes from './Button.module.sass'

import React from 'react'

const Button = ({children, className, ...otherProps}) => {
	const customClass = className?.split(' ').map(item => classes[item] || item).join(' ')
	return (
		<button className={`${classes.container} ${customClass}`} {...otherProps}>
			{children}
		</button>
	)
}

export default Button
