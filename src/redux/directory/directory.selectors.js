import { createSelector } from "reselect"

const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector(
	[selectDirectory],
	directory => Array.from(directory.sections, ([name, value]) => value)  
)
