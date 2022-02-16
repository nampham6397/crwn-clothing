import { createSelector } from "reselect";

const selectoDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectoDirectory],
    directory => directory.sections
)