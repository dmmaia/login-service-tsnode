class SessionProvider {

  public async login(login: string, password: string){
    const users = [{
      id: "1",
      name: "Teste",
      login: "teste",
      password: "123"
    }]

    const user = users.filter(i=>{ return i.login===login&&i.password===password})
    if(user.length>0){
      return user[0]
    }else{
      throw new Error("login or password incorrect!");
    }
  }
}

export default new SessionProvider()