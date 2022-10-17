import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import Header from '@/Components/Header';

const Dashboard = (props) => {
    return (
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<Header  title="Dashboard"  />}

    >
        <Head title="Dashboard" />
        <div>
       <section className="px-4 py-12 mx-auto max-w-7xl">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
    <div className="card">
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Total Income</p>
        <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">$24,563</h2>
      </div>
      <a href="#" className="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">See all income reports</a>
    </div>
    <div className="card">
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Expenses</p>
        <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">$562</h2>
      </div>
      <a href="#" className="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">See all expense tracking</a>
    </div>
    <div className="card">
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Last 30 days</p>
        <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">$24</h2>
      </div>
      <a href="#" className="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">View all invoices</a>
    </div>
    <div className="card">
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Next Month</p>
        <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">$655</h2>
      </div>
      <a href="#" className="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">Full projection report</a>
    </div>
  </div>
</section>

        </div>
        </AuthenticatedLayout>
    );
}

export default Dashboard;
