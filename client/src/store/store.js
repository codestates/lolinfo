import { createStore } from '@reduxjs/toolkit';
import rootReducer from '../modules';


export const store = createStore(rootReducer);
