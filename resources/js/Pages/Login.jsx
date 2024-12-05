import { Head } from "@inertiajs/react";
import LayoutAuth from "@/Layouts/Auth/LayoutAuth";
import Input from "@/Components/InputPost";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

export default function Login() {
    return (
        <>
            <Head title="Login" />
            <LayoutAuth
                title={"Welcome Back"}
                description={"Login to your account"}
            > 
                <form method="POST" action="/login" className="flex flex-col sm:w-[40%] w-[90%] gap-5 shadow items-start rounded-xl  justify-between  p-5">
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
                    label={"Login"}
                    className="w-full btn "
                    type="submit"></PrimaryButton>
                    <div className="w-full flex justify-end  ">
                        <a href="#" class="text-sm"> Belum ada akun? <span class="font-semibold text-blue-600 underline">Daftar disini</span> </a>
                    </div>
                </form>   
            </LayoutAuth>
        </>
        
    )
}