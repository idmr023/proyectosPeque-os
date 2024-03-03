import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";
import * as express from "express";

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Express
const app = express();
app.use( cors({origin: true}));

export const holaMundo = functions.https.onRequest((request, response) => {
  response.json({mensaje: "Hello from Firebase! - 2000"});
});

export const goty = functions.https.onRequest(async (request, response) => {
  const gotyRef = db.collection("goty");
  const docsSnap = await gotyRef.get();
  const juegos = docsSnap.docs.map( (doc) => doc.data() );

  response.json( juegos );
});

app.get("/goty", async (req, res) => {
  const gotyRef = db.collection("goty");
  const docsSnap = await gotyRef.get();
  const juegos = docsSnap.docs.map( (doc) => doc.data() );

  res.json( juegos );
});

app.post("/goty/:id", async (req, res) => {
  const id = req.params.id;
  const gameRef = db.collection("goty").doc(id);
  const gameSnap = await gameRef.get();

  if ( !gameSnap.exists ) {
    res.status( 404 ).json({
      ok: false,
      mensaje: "No existe un juego con ese ID " + id,
    });
  } else {
    res.json("Juego existe");
  }
});

export const api = functions.https.onRequest(app);

