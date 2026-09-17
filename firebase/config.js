import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO",
  databaseURL: "TU_DB_URL",
  projectId: "TU_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };
