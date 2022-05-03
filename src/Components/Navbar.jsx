import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <div class="flex justify-between  navbar bg-base-300 rounded-full">
                <a class="btn btn-ghost normal-case text-xl ">Home</a>
                <a class="btn btn-ghost normal-case text-xl ">AddProduct</a>
                <a class="btn btn-ghost normal-case text-xl ">ProductList</a>
                <a class="btn btn-ghost normal-case text-xl ">CounterProducts</a>
            </div>
        </div>
    )
}
