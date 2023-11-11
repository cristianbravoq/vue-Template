import { createStore } from 'vuex';
import companyModule from './modules/company';
import jobsModule from './modules/jobs';

const store = createStore({
        modules: {
            company: companyModule,
            jobs: jobsModule
        }
    });

export default store;