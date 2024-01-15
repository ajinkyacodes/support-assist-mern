import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import ticketReducer from "../features/tickets/ticketSlice";
import noteReducer from "../features/notes/noteSlice";

// Show or Hide Redux Developer Tools on Browser
const devToolsStatus = process.env.REACT_APP_DEVTOOLS_STATUS === "hide" ? false : true;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
    notes: noteReducer,
  },
  devTools: devToolsStatus,
});
