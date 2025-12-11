import { Tv } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <Tv className="w-32 h-32 mx-auto mb-6 text-red-600" />
        <h1 className="text-5xl font-bold text-white">تلویزیون فعال شد!</h1>
        <p className="text-2xl text-gray-300 mt-4">حالا می‌تونی کانال‌ها رو اضافه کنی</p>
      </div>
    </div>
  )
}
