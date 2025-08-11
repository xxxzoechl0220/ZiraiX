import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">页面未找到</h2>
          <p className="text-gray-600 mb-8">
            抱歉，您访问的页面不存在或已被移动。
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            返回首页
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>或者访问其他页面：</p>
            <div className="mt-2 space-x-4">
              <Link to="/about" className="text-blue-600 hover:underline">关于我们</Link>
              <Link to="/product" className="text-blue-600 hover:underline">产品</Link>
              <Link to="/contact" className="text-blue-600 hover:underline">联系我们</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
