import React from 'react'

function Footer() {
  return (
    <footer class="text-gray-600 body-font">
    <div class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="/Images/portfolio.png" className='w-10 lg:w-15'/>
        <span class="ml-3 text-xl">Ayush Sharma</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Portfolio — Ayush Sharma
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a target='_blank' href="https://www.linkedin.com/in/ayush-sharma-7a88a3274/" class="ml-3 text-gray-500" title='LinkedIn'>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </footer>
  )
}

export default Footer