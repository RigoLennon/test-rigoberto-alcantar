const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/users', (req, res) => {
    const users = [
        {id: 1, nombre: 'Juan', apellido: 'Perez'},
        {id: 2, nombre: 'Ivan', apellido: 'Perez'},
        {id: 3, nombre: 'Pedro', apellido: 'Perez'}
    ];
    res.json(users);
});

app.get('/mails', (req, res)=> {
    const mails = [
        {
            id:"0",
            from:"mhallatt0@walmart.com",
            to:"cziem0@surveymonkey.com",
            subject:"Office Assistant IV",
            body:"condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
            date:"3/31/2017",
            time: "9:40",
            isReaded:false,
            avatar:"https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
            tag:"Indigo",
            attachements:[{"file":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
            name:"ut_nulla_sed.jpeg"}]
        },
        {
            id:"1",
            from:"nmulbery1@seattletimes.com",
            to:"idimont1@usa.gov",
            subject:"Technical Writer",
            body:"sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
            date:"11/17/2016",
            time: "22:00",
            isReaded:false,
            avatar:"https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1",
            tag:"Teal",
            attachements:[{"file":"http://dummyimage.com/250x250.jpg/dddddd/000000",
            name:"sodales_scelerisque_mauris.jpeg"}]
        }
    ];
    res.json(mails);
})

const port = 5000;

app.listen(port, () => console.log('El servidor se inicio en el puerto 5000'));