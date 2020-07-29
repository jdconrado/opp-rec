const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors =  require('cors');
const fetch = require('node-fetch');

const app = express();
const ENDPOINT = "https://gis-api.aiesec.org/graphql";
const API_TOKEN_COL = "0541e284521e0b582d805ce642bab436ed00b61097ef6c1abb62ea87a8b23281";
const API_TOKEN_OPPS = "e316ebe109dd84ed16734e5161a2d236d0a7e6daf499941f7c110078e3c75493";

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.post("/getPerson", async (req,res) =>{
    let query=`query{
        getPerson(id:${req.body.PersonID}){
          person_profile{
            skills{
              constant_id
            },
            backgrounds{
              id
            },
            languages{
              constant_id
            },
            nationalities{
              id
            }
          }
        }
    }`
    let person = await fetch(ENDPOINT, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": API_TOKEN_COL
        },
        body:JSON.stringify({query})
    });
    person = await person.json();
    res.json({
        respuesta: person.data.getPerson
    });
});

app.use("/", express.static("./public"));

const port =  process.env.PORT || 2000;

app.listen(port, ()=>{
    console.log(`RUNNING IN PORT ${port}`)
});