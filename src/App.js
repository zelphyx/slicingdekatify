
import './App.css';
import './output.css'
import Card from './cardharga';
import React from "react";
import IconTickCircle from "./tickicons";
import IconMinus from "./icons";

function App() {
    const card1 = ["Mendengarkan Tanpa Iklan",
        "Fitur Download Lagu",
        "High Audio Quality",
        "Unlocked Karaoke Feature",
        "Mainkan Alat Musik Virtual"

    ];
    return (
        <div>
            <div className="dekatify-container">
                <img src="/img/musicpic.png" alt="Music Picture" className="dekatify-head-pict"/>
            </div>

            <div className="dekatify-header-1"><p>Become a Dekatify Member!</p></div>
            <p className="dekatify-detail">Dengan Membayar Rp. 350.000/bulan, Jadilah Member Dekkers
                dan <br/>Rasakan kenikmatan mendengarkan musik tanpa batas hingga karaoke bersama teman.<br/>Batalkan
                kapan saja
            </p>
            <button type="button"
                    className="dekatify-button text-black font-bold bg-white hover:bg-yellow-400 rounded-full text-sm px-20 py-3 text-center mb-2 mt-40">Dapatkan
                Paket Dekkers
            </button>
            <p className="font font-light text-white pl-custom text-xs">Batalkan kapan saja,tawaran hanya berlaku untuk
                pengguna yang belum pernah berlangganan <br/>
                Syarat dan Ketentuan berlaku</p>

            <h2 className="font font-bold text-white text-5xl text-center mt-50">Rasakan Sensasinya</h2>
            <p className="font font-light text-white text-xs text-center mt-3">Menjadi member Dekkers dan nikmati caramu
                mendengar musik. <br/>
                Batalkan kapan saja.</p>

            <div className="flex items-center justify-center min-h-[450px] mt-40">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-transparent dark:bg-transparent">
                            <br/>
                        </th>
                        <th scope="col" className="px-6 py-3 text-sm">
                            Free Members
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800 flex items-center text-sm">
                            <img src="/img/Group 15.svg" alt="Group 15" className="w-12 h-8 mr-2" />
                            Dekkers
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr className=" border-gray-200 dark:bg-transparent">
                        <th scope="row"
                            className="font px-6 py-8 text-xl font-medium text-gray-900 whitespace-nowrap bg-transparent  dark:text-white dark:bg-transparent">
                            Mendengarkan musik bebas iklan
                        </th>
                        <td className="px-6 py-4">
                            <IconMinus className="text-5xl mx-5"/>
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">

                            <IconTickCircle  className="text-5xl mx-5 my-5"/>
                        </td>

                    </tr>
                    <tr className=" border-gray-200 dark:bg-transparent">
                        <th scope="row"
                            className="font px-6 py-4 text-xl font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-transparent">
                            Download untuk
                            mendengarkan offline
                        </th>
                        <td className="px-6 py-4">
                            <IconMinus className="text-5xl mx-5"/>
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            <IconTickCircle  className="text-5xl mx-5 my-5"/>
                        </td>

                    </tr>
                    <tr className="border-b-1 border-gray-200 dark:bg-transparent">
                        <th scope="row"
                            className="px-6 py-4 text-xl font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-transparent">
                            Kualitas audio tinggi
                        </th>
                        <td className="px-6 py-4">
                            <IconMinus className="text-5xl mx-5"/>
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            <IconTickCircle  className="text-5xl mx-5 my-5"/>
                        </td>

                    </tr>
                    <tr className="border-b-1 border-gray-200 dark:bg-transparent">
                        <th scope="row"
                            className="px-6 py-7 text-xl font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-transparent">
                            Mendengarkan <br/>dan karaoke bersama teman  <br/>secara real-time
                        </th>
                        <td className="px-6 py-4">
                            <IconMinus className="text-5xl mx-5"/>
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            <IconTickCircle  className="text-5xl mx-5 my-5"/>
                        </td>

                    </tr>
                    <tr>
                        <th scope="row"
                            className="px-6 py-10 text-xl font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-transparent">
                            Mainkan alat musik virtual bawaan dari aplikasi
                        </th>
                        <td className="px-6 py-4">
                            <IconMinus className="text-5xl mx-5"/>
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            <IconTickCircle  className="text-5xl mx-5 my-5"/>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
                </div>
            </div>
            <h2 className="font font-bold text-white text-5xl text-center mt-60 sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl">Berbagai Paket Yang Sesuai Untuk Anda</h2>
            <p className="font font-light text-white text-sm text-center mt-5">Pilih Paket Dekkers dan dengarkan musik dengan leluasa sesuai keinginan anda
                <br/>Bayar dengan cara apa saja. Batalkan kapan saja.</p>
            <div className="mt-40"></div>
            <div className="p-3 grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3">
                <Card price="7" features={card1} type="Daily Dekkers" duration="day" />
                <Card price="21" features={card1} type="Mini Dekkers" duration="3 day"/>
                <Card price="29" features={card1} type="Weekly Dekkers" duration="week"/>
            </div>
            <div className="p-3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                <Card price="70" features={card1} type="Monthly Dekkers" duration="month"/>
                <Card price="850" features={card1} type="Yearly Dekkers" duration="year"/>
            </div>





        </div>);
}

export default App;
