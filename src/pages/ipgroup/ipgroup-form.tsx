import axiosInstance, { fetchCSRF } from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

interface IpGroup {
  id: number;
  ip_group: string;
  region: string;
  created_at: string;
  updated_at: string;
}

const formSchema = z.object({
  ip_group: z.string().nonempty("IP Group is required"),
  region: z.string().nonempty("Region is required"),
});

type FormSchema = z.infer<typeof formSchema>;

const IpGroupForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const { mutate } = useMutation<IpGroup, Error, FormSchema, unknown>({
    mutationKey: ["addIpGroup"],
    mutationFn: async (values) => {
      const res = await axiosInstance.post<IpGroup>('api/ipgroup', values);
      return res.data;
    },
    onSuccess: () => {
      alert('IP Group added successfully');
      refetch();
      reset();
    },
  });

  const { data, isFetching, error: queryError, refetch } = useQuery<IpGroup[], Error>({
    queryKey: ['ipgroups'],
    queryFn: async () => {
      const res = await axiosInstance.get<{ ipgroups: IpGroup[] }>('/api/ipgroup');
      return res.data.ipgroups;
    },
  });

  const onSubmit = async (values: FormSchema) => {
    try {
      await fetchCSRF();
      mutate(values);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  if (queryError) return <div>Error: {queryError.message}</div>;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-fit text-left p-2 gap-2">
        <label className="flex flex-col gap-1">
          <span className="text-sm">IP Group</span>
          <input type="text" className="ring-1 ring-blue-300 focus:bg-blue-50 px-1" {...register('ip_group')} />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm">Region</span>
          <input type="text" className="ring-1 ring-blue-300 focus:bg-blue-50 px-1" {...register('region')} />
        </label>

        {errors && <p className="text-sm text-red-400">{errors?.ip_group?.message || errors?.region?.message}</p>}

        <button type="submit" className="w-fit px-4 rounded-xs bg-blue-500 text-white">Submit</button>
      </form>

      {isFetching ? <div>Loading...</div> :
        <IpGroupTable data={data as IpGroup[]} columns={IpGroupColumns} />
      }
    </>
  );
};

export default IpGroupForm;