import { io } from "./http";

io.on("connection", (socket) => {
  socket.on("messagem", (data) => {
    console.log("ESP-EYE CONNECT", data);
    socket.send(data)
  });
});

// https://www.youtube.com/watch?v=R84rTfBMaoU
// https://www.youtube.com/watch?v=_Z9Axfh6AEU

// https://www.dobitaobyte.com.br/socket-client-com-esp32/

/*
const Socket = new Ws.Server({ port: Ws_port }, () => {
  console.log("Websocket listem port:>> 1833");
});

Socket.on("connection", (ws, req) => {
  console.log("conectado...");
  List_Client.push(ws);
  ws.on("messagem", (data) => {
    List_Client.forEach((ws, i) => {
      if (ws.readyState === ws.OPEN) {
        ws.send(data);
      } else {
        List_Client.splice(i, 1);
      }
    });
  });
});



app.get('/cam', (req, res) => {
  res.sendFiles(path.resolve(__dirname, './Cam.html'))
})

app.listen(Http_port, () => {
  console.log("server listen port:>> 3000");
})
*/
