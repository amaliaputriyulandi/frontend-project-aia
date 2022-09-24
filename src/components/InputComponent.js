import React from 'react'
import '../css/style.css'


const InputComponent = () => {
    return (
        <div class= "wrapper">
            <div class= "container bg-white shadow" id= "add-todo">
                <h2 class="container-header text-center">Tambah yang harus dilakukan</h2>
                <from class="form" action="#" id="form">
                    <div class="form-group form-title">
                        <label for="title">Masukkan hal yang akan dilakukan</label>
                        <input type="text" id="title" name="title" required></input>
                    </div>
                    <div class="form-group form-title">
                        <label for="date">Masukkan tanggal harus selesai</label>
                        <input type="date" id="date" name="date" required></input>
                    </div>
                    <input type="submit" value="Submit" name="Submit" class="btn-submit"></input>
                </from>
            </div>

            <div class="container">
                <h2 class="container-header">Yang harus dilakukan</h2>
                <div class="list-item" id="todos">

                </div>
            </div>
            <div class="container">
                <h2 class="container-header">Yang sudah dilakukan</h2>
                <div class="list-item" id="completed-todos">
                    
                </div>
            </div>

        </div>
    )
}

export default InputComponent
