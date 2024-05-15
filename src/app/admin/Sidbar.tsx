
import Link from "next/link";
import { LayoutDashboard } from 'lucide-react';
import { KeyboardMusic } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

const AdminSidebar = () => {
  return (
    <section className="border-2 border-slate-200 w-64 h-screen px-3 py-1 mx-6">
      <Link href="/admin" className="flex items-center text-lg lg:text-2xl font-semibold">
        <LayoutDashboard className="text-3xl me-1" />
        <span className="hidden lg:block">Dashboard</span>
      </Link>
      <ul className="mt-10 flex items-center justify-center flex-col lg:items-start">
        <Link className="flex items-center text-xl mb-5 lg:border-b border-slate-400  hover:text-slate-700 transition" 
        href="/admin/articles">
          <KeyboardMusic className="me-1" />
          <span className="hidden lg:block">Users</span>
        </Link>
        <Link className="flex items-center text-xl mb-5 lg:border-b border-slate-400  hover:text-slate-700 transition" 
        href="/admin/stat">
          <MessageCircle className="me-1" />
          <span className="hidden lg:block">State</span>
        </Link>
      </ul>
    </section>
  )
}

export default AdminSidebar