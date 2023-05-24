'use client'

import DashboardNav from '../../components/dashboard/DashboardNav';
import EmptyState from '../../components/dashboard/EmptyState';
import { PlusIcon } from '@heroicons/react/20/solid'
import {useRouter} from 'next/navigation'
import Footer from '../../components/tests/Footer';


export default function Dashboard() {

const router = useRouter();

const handleClick = event => {
  event.preventDefault()
  router.push('/test')
}

  return (

    <main >
      <div className="flex min-h-screen" >
        <div className="w-1/4">
          <DashboardNav />
    
        </div>
        <div className="flex-grow">
          <EmptyState>
          <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleClick} >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New Project
        </button>
        </EmptyState >

        </div>

        <div>
        <Footer/>
          </div>
               
      </div>
      

    </main>
  );
}
