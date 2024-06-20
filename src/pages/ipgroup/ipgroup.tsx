import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import IpGroupTable from "./ipgroup-table";
import IpGroupColumns from "./columns";
import IpGroupForm from "./ipgroup-form";

interface IpGroup {
  id: number;
  ip_group: string;
  region: string;
  created_at: string;
  updated_at: string;
}

const fetchIpGroups = async () => {
  const res = await axiosInstance.get<{ data: IpGroup[] }>('/api/ipgroup');
  return res.data.data;
};

const IpGroupPage = () => {
  const { data, error, isLoading } = useQuery<IpGroup[], Error>({
    queryKey: ["ipgroups"],
    queryFn: fetchIpGroups,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">IP Groups</h1>
      <IpGroupForm />
      <IpGroupTable columns={IpGroupColumns} data={data as IpGroup[]} />
    </div>
  );
};

export default IpGroupPage;