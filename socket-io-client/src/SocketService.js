class SocketService {
  setSocket(socket){
    this.socket = socket;
  }

  getSocket(){
    return this.socket;
  }
}

export default new SocketService();
