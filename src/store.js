import { reactive } from "vue";

export const store = reactive({
    projects: [],
    currentPage: 1,
    lastPage: null,

});