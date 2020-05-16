import React from 'react'
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
	<div>
		<span>Show: </span>
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL </FilterLink>
		<FilterLink filter={VisibilityFilters.ACTIVE}>Active </FilterLink>
		<FilterLink filter={VisibilityFilters.COMPLETED}>Completed </FilterLink>
	</div>
);
export default Footer;