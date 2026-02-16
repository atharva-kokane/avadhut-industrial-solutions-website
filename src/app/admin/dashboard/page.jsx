import AdminDashboard from "../../screen/admin/AdminDashboard";
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Page() {
   const cookieStore = await cookies()

  // Check if environment variables are set
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Configuration Error</h1>
          <p className="text-gray-700 mb-4">Supabase environment variables are not configured.</p>
          <p className="text-sm text-gray-600">Please create a .env.local file with your Supabase credentials.</p>
        </div>
      </div>
    );
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            
          }
        },
      },
    }
  )

  try {
    const { data: { user } } = await supabase.auth.getUser()
    console.log('Dashboard user check:', user); // Debug log

    if (!user || user.email !== "atharvakokane555@gmail.com") {
      console.log('Redirecting to login...'); // Debug log
      redirect("/admin/login")
    }

    return <AdminDashboard />;
  } catch (error) {
    if (error?.digest?.startsWith('NEXT_REDIRECT')) {
      throw error
    }

    console.error('Dashboard auth error:', error); // Debug log
    redirect("/admin/login")
  }
}
