import { serverHttp } from "./http";
import "./Websocket";


serverHttp.listen(3000, () => console.log("rodando"));