import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'

const formSchema = z.object({
  date: z.string(),
  control_no: z.string(),
  issuing_office: z.string(),
  last_name: z.string(),
  first_name: z.string(),
  middle_name: z.string(),
  purpose: z.string(),
  gender: z.string(),
  ethnicity: z.string(),
  birthdate: z.date(),
  age: z.string(),
  barangay: z.string(),
  father: z.string(),
  father_ethnicity: z.string(),
  father_place_of_origin: z.string(),
  mother: z.string(),
  mother_ethnicity: z.string(),
  mother_place_of_origin: z.string(),
  spouse_name: z.string().nullable(),
  province: z.string(),
  municipality: z.string()
})

type FormSchema = z.infer<typeof formSchema>

export default function ApplicationProcess() {

  const { handleSubmit, register, formState: { errors } } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (values: FormSchema) => {
    console.log(values)
  }

  return (
    <>
      <div className='size-2/3 h-auto mx-auto p-20 my-12 border rounded-lg shadow-lg'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <label htmlFor="dob" className="mt-2 text-xl block text-sm font-medium text-gray-700">Date of Registration</label>
            <input {...register('date')} id="date" type="date" placeholder="Date of Birth" className="p-2 border border-gray-300 rounded-md" />

            <label htmlFor=" issuing_office" className="mt-2 text-xl block text-sm font-medium text-gray-700">Issuing Office</label>
            <input type="text" id="issuing_office" placeholder="Issuing Office" className="p-2 border border-gray-300 rounded-md" />

            <label htmlFor="cn" className="mt-2 text-xl block text-sm font-medium text-gray-700">Control Number</label>
            <input type="text" id="cn" placeholder="Control No" className="p-2 border border-gray-300 rounded-md" />

          </div>

          <div className="mb-4 mt-20">
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
              Purpose
            </label>
            <select {...register('purpose')} id="purpose" name="purpose" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option value="" disabled selected hidden>Select a purpose</option>
              <option value="">Napolcom</option>
              <option value="">BFP</option>
              <option value="">BuCor</option>
              <option value="">Scholarchip</option>
              <option value="">AFP</option>
              <option value="">ITM</option>
              <option value="">LocEM</option>
              <option value="">PCG</option>
              <option value="">PDEA</option>
              <option value="">IPMR</option>
            </select>
          </div>


          <div className="mb-6 mt-20">
            <h2 className="text-lg font-bold mb-5">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4 mt-2">

              <input {...register('last_name')} type="text" placeholder="Last Name" className="p-2 border border-gray-300 rounded-md" />
              <input {...register('first_name')} type="text" placeholder="First Name" className="p-2 border border-gray-300 rounded-md" />
              <input {...register('middle_name')} type="text" placeholder="Middle Name" className="p-2 border border-gray-300 rounded-md" />

              <select {...register('gender')} id="gender" name="Sex" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="" disabled>Select Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>

              <label {...register('birthdate')} htmlFor="birthday" className="mt-2 text-xl">Date of Birth</label>
              <input id="birthday" type="date" placeholder="Date of Birth" className="p-2 border border-gray-300 rounded-md" />


              <input {...register('age')} type="number" placeholder="Age" min="0" max="120" className="p-2 border border-gray-300 rounded-md" />

              <select {...register('ethnicity')} id="ethnicity" name="ethnicity" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="" disabled>Ethnicity</option>
                <option value="">APPLAY</option>
                <option value="">AYANGAN</option>
                <option value="">BALANGAO </option>
                <option value="">BONTOC </option>
                <option value="">KALINGA</option>
                <option value="">KARAO</option>
              </select>

              <input {...register('province')} type="text" placeholder="province" className="p-2 border border-gray-300 rounded-md" />
              <input {...register('municipality')} type="text" placeholder="Municipality" className="p-2 border border-gray-300 rounded-md" />
              <input {...register('barangay')} type="text" placeholder="Barangay" className="p-2 border border-gray-300 rounded-md" />

              <input {...register('spouse_name')} type="text" placeholder="if married name of Spouse" className="p-2 border border-gray-300 rounded-md col-span-2" />

            </div>
          </div>

          <div className="mb-10 mt-10">
            <h2 className="text-lg font-bold mb-5">Educational Background</h2>
            <div className="grid grid-cols-2 gap-4 mt-2">

              <select id="HighestEduc" name="HighestEduc" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="" disabled>Educational Attainment</option>
                <option value="">Elementary Graduate</option>
                <option value="">High School Graduate</option>
                <option value="">Collage Graduate</option>
                <option value="">Masters Graduate</option>
                <option value="">Vocational</option>
                <option value="">Diploma</option>
                <option value="">Undergraduate</option>
                <option value="">Post Graduatel</option>
                <option value="">Not Given</option>
              </select>

              <select id="CivilStatus" name="CivilStatus" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="" disabled>Degree Obtain</option>
                <option value="">Doctoral Degree</option>
                <option value="">Masters Degree</option>
                <option value="">Bachelors Degree</option>
                <option value="">Secondary School Diploma</option>
                <option value="">Lower Secondary Diploma</option>
                <option value="">Not Given</option>
              </select>
            </div>
          </div>


          <div className="mb-6">

            <h2 className="text-lg font-bold mb-5">Parental Background</h2>

            <div className="grid grid-cols-2 gap-4 mt-2">

              {/* Father's Side */}
              <div className="col-span-2">
                <h2 className="text-lg font-semibold">Father's Side</h2>
              </div>

              <input {...register('father')} type="text" placeholder="Father's Name" className="p-2 border border-gray-300 rounded-md" />


              <select {...register('father_ethnicity')} id="father_ethnicity" name="ethnicity" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="" disabled>Ethnicity</option>
                <option value="">APPLAY</option>
                <option value="">AYANGAN</option>
                <option value="">BALANGAO </option>
                <option value="">BONTOC </option>
                <option value="">KALINGA</option>
                <option value="">KARAO</option>
              </select>

              <input {...register('father_place_of_origin')} id="father_place_of_origin" type="text" placeholder="Place of Origin" className="p-2 border border-gray-300 rounded-md" />
              <div></div>



              {/* Mother's Side */}
              <div className="col-span-2">
                <h2 className="text-lg font-semibold">Mother's Side</h2>
              </div>

              <input {...register('mother')} type="text" placeholder="Mother's Name" className="p-2 border border-gray-300 rounded-md" />

              <select {...register('mother_ethnicity')} id="mother_ethnicity" name="ethnicity" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="" disabled>Ethnicity</option>
                <option value="">APPLAY</option>
                <option value="">AYANGAN</option>
                <option value="">BALANGAO </option>
                <option value="">BONTOC </option>
                <option value="">KALINGA</option>
                <option value="">KARAO</option>
              </select>

              <input  {...register('mother_place_of_origin')} id="mother_place_of_origin" type="text" placeholder="Place of Origin" className="p-2 border border-gray-300 rounded-md" />
              <div></div>


            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-10">
            <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-md">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Process
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

