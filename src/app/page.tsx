import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
const logo = require('../../public/logo.svg');

export default function Home() {
  return (
    <div>
      {/* Nav */}
      <nav className="bg-amber-500 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <img src='https://cdn.discordapp.com/attachments/790073356120358945/1071801285369671712/tut-wuri-handayani.webp' className="h-6 mr-3 sm:h-9" alt="logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TK Melati Tunas Bangsa</span>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 pl-3 pr-4 text-white bg-amber-500 rounded md:bg-transparent md:text-amber-500 md:p-0 dark:text-white" aria-current="page">Halaman Utama</a>
              </li>             
              <li>
                <a href="../kegiatan_pembelajaran" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pembelajaran</a>
              </li>
              <li>
                <a href="../kegiatan_eksternal" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Eksternal</a>
              </li>   
              <li>
                <a href="../daftar-guru" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Daftar Guru</a>
              </li>            
            </ul>
          </div>
        </div>
      </nav>

      {/* Body */}

      {/* Footer */}
      <footer className="relative bg-gray-500 pt-8 pb-6 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700 ">Kontak & Sosial Media Kami</h4>
              <div className="mt-6 lg:mb-0 mb-6 flex flex-wrap items-center justify-between mx-auto">
                <ul className='flex flex-col'>
                  <li>
                    <div className="flex items-center">
                      <img src='https://cdn.discordapp.com/attachments/790073356120358945/1072126461852524644/email-logo-png-27.png' className="mr-2 mb-2" alt="Email" height='28px' width='28px' />
                      <span className="mb-3 self-center text-l font-semibold whitespace-nowrap dark:text-white">example@email.com</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <img src='https://cdn.discordapp.com/attachments/790073356120358945/1072137129687273602/yt.png' className="mr-2 mb-2" alt="Email" height='28px' width='28px' />
                      <span className="mb-3 self-center text-l font-semibold whitespace-nowrap dark:text-white">Youtube</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <img src='https://cdn.discordapp.com/attachments/790073356120358945/1072126462318088245/87390.png' className="mr-2 mb-2" alt="Email" height='28px' width='28px' />
                      <span className="mb-3 self-center text-l font-semibold whitespace-nowrap dark:text-white">Instagram</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Alamat</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="google.com">Placeholder</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="google.com">Placeholder</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3 border-gray-300" />
        </div>
      </footer>
    </div>
  )
}
