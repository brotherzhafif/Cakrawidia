import { Head } from "@inertiajs/react";
import LayoutAuth from "frontend/resources/js/Layouts/Auth/LayoutAuth";
import Input from "frontend/resources/js/Components/InputPost";
import PrimaryButton from "frontend/resources/js/Components/Buttons/PrimaryButton";

export default function Login() {
    return (
        <>
            <Head title="Register" />
            <LayoutAuth
                title={"Gabung Cakrawidia"}
                description={"Buat akun untuk mendapatkan jawaban dari pertanyaanmu lebih cepat"}
            > 
                <form method="POST" action="/Register" className="flex flex-col sm:w-[40%] w-[90%] gap-5 shadow items-start rounded-xl  justify-between  p-5">
                    <Input
                        placeholder={"Username"}
                        type="name"
                        name="username"
                        label="Username"
                        />
                    <Input
                        placeholder={"Masukan Email"}
                        type="email"
                        name="email"
                        label="Email"
                        />
                    <Input 
                        placeholder={"Masukan Password"}
                        type="password" 
                        name="password" 
                        label="Password"/>
                    <PrimaryButton 
                        label={"Daftar"}
                        className="w-full btn "
                        type="submit">
                    </PrimaryButton>
                    <div className="w-full flex justify-end  ">
                        <a href="#" class="text-sm"> Sudah ada akun? <span class="font-semibold text-blue-600 underline">Masuk</span> </a>
                    </div>
                </form>   
            </LayoutAuth>
        </>
        
    )
}