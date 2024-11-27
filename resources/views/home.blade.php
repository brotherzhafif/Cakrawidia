@extends('layouts.app')
@section('title', 'Home')
@section('content')
<!-- You can open the modal using ID.showModal() method -->
<div class="bg-sky-500 flex text-center flex-col gap-10 justify-center items-center grow w-full">
    <h1 class=" text-[3rem] md:text-[5rem] font-bold">Punya pertanyaan ?</h1>
    <button class="btn btn-primary w-[50%] font-bold rounded-full" onclick="my_modal_4.showModal()">Ajukan pertanyaan</button>
    <dialog id="my_modal_4" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">Click the button below to close</p>
        <div class="modal-action">
        <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <button class="btn">Close</button>
        </form>
        </div>
    </div>
    </dialog>
</div>

@endsection
