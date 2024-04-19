import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const ReqBtn = () => {
    return (
      <>
      <div className="fixed bottom-0 right-0 p-4">
        <Link to="/other-page" className="text-blue-500 font-semibold text-lg flex items-center p-2 bg-white rounded shadow-md">Download Required Documents<ArrowRight size={24} className="ml-2" /></Link>
      </div>
       
      </>
    );
  };