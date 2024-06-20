import React, { useEffect, useState } from "react";
import { Search } from 'lucide-react';
import Navbar from '@/components/Templates/Header/Navbar';
import IpGroupTable from '@/pages/ipgroup/ipgroup-table';
import NcipLogo from "@public/logo2.png";

interface IpGroup {
  id: number;
  ip_group: string;
  region: string;
  created_at: string;
  updated_at: string;
}

const IpgroupColumns = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "ip_group",
    header: "IP Group",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "region",
    header: "Region",
    cell: (info) => info.getValue(),
  },
];

export const Ipgroup = () => {
  const [data, setData] = useState<IpGroup[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8000/api/ipgroup", {
        method: "GET",
      });
      const result = await res.json();
      setData(result.data);
    })();
  }, []);

  const filteredData = data.filter(item =>
    item.ip_group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col pb-10 md:flex-row-reverse">
        <div className="mt-20 mr-10 ml-20 p-2 sm:w-1/4">
          <h1 className="text-2xl font-bold text-center">National Commission of Indigenous Peoples</h1>
          <img className="size-80 max-w-full h-auto" src={NcipLogo} alt="NCIP LOGO" />
        </div>
        <div className="flex flex-col w-30 md:w-full">
          <h1 className="font-bold text-2xl pl-3 pt-3 md:pl-20 md:pt-10 lg:text-5xl">
            Indigenous Culture Communities/Indigenous Peoples (ICCs/IPs)
          </h1>
          <div className="flex flex-col pl-3 pr-3 md:pl-20 md:pr-60 lg:pr-96 relative mt-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-8 rounded-lg border border-gray-300"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex flex-col md:pl-20 p-5">
            <div className="w-full mt-2 rounded-lg border border-gray-300">
              <IpGroupTable data={filteredData} columns={IpgroupColumns} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ipgroup;
