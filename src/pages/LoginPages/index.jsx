export const LoginPage = () => {
    return (
        < >
            <div className="bg-gray-400 flex flex-col justify-center items-center p-0 px-2 min-h-screen"  id="login">
               <h1 className="font-black mb-10 text-2xl" >Login</h1> 
               <form  className="flex flex-col justify-center items-center">
                <div className="mb-5" >
                    <label className="block m-1"  htmlFor="email">Email</label>
                    <input className="py-2 px-20 rounded" type="email" name="email" id="" />
                </div>

                <div className="mb-5" >
                    <label className="block m-1"  htmlFor="password">Senha</label>
                    <input className="py-2 px-20 rounded" type="password" name="password" id="password" />
                </div>
                <div >
                    <button className="bg-black text-white py-3 px-[152px]  rounded" type="submit">Entrar</button>
                </div>
               </form>
            </div>
        </>
    )
}
