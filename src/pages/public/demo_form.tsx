import DataTable from "@/components/data-viz(example)/data-table[reuse]";
import DemoFormColumn from "./demo_folder/form_column";
import axiosInstance, { fetchCSRF } from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

interface Member {
  name: string;
  email: string;
}

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
}).required({ name: true, email: true });

type FormSchema = z.infer<typeof formSchema>;

const DemoForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const { mutate } = useMutation<Member, Error, FormSchema, unknown>({
    mutationKey: ["addMember"],
    mutationFn: async (values) => {
      const res = await axiosInstance.post<Member>('api/member', values);
      return res.data;
    },
    onSuccess: () => {
      alert('Member added successfully');
      refetch();
      reset();
    },
  });

  const { data, isFetching, error: queryError, refetch } = useQuery<Member[], Error>({
    queryKey: ['members'],
    queryFn: async () => {
      const res = await axiosInstance.get<{ members: Member[] }>('/api/members');
      return res.data.members
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
          <span className="text-sm">Name</span>
          <input type="text" className="ring-1 ring-blue-300 focus:bg-blue-50 px-1" {...register('name')} />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm">Email</span>
          <input type="email" className="ring-1 ring-blue-300 focus:bg-blue-50 px-1" {...register('email')} />
        </label>

        {errors && <p className="text-sm text-red-400">{errors?.email?.message || errors?.name?.message}</p>}

        <button type="submit" className="w-fit px-4 rounded-xs bg-blue-500 text-white">Submit</button>
      </form>

      {isFetching ? <div>Loading...</div> :
        <DataTable data={data as Member[]} columns={DemoFormColumn} />
      }
    </>
  );
};

export default DemoForm;

