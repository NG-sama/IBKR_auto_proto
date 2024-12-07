export default function Footer() {
  return (
    <footer className="bg-white border-t py-4 px-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">© 2024 IBKR Auto. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact Support</a>
        </div>
      </div>
    </footer>
  )
}

