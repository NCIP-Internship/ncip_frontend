import React, { useState } from 'react';

export default function Cocform() {
  return (
    <>
        <div className='size-2/3 h-auto mx-auto p-20 m-20 border rounded-lg shadow-lg'>
      <form>

          <div className="grid grid-cols-2 gap-4 mt-2">

          <label htmlFor="dob" className="mt-2 text-xl block text-sm font-medium text-gray-700">Date of Registration</label>
          <input id="dob" type="date" placeholder="Date of Birth" className="p-2 border border-gray-300 rounded-md" />

          <label htmlFor="cn" className="mt-2 text-xl block text-sm font-medium text-gray-700">Control Number</label>
          <input type="text" id="cn" placeholder="Control No" className="p-2 border border-gray-300 rounded-md" />

          </div>

          <div className="mb-4 mt-20">
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                    Purpose
                  </label>
                  <select id="purpose" name="purpose" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option value=""disabled>Select a purpose</option>
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
              
              <input type="text" placeholder="Last Name" className="p-2 border border-gray-300 rounded-md" />
              <input type="text" placeholder="First Name" className="p-2 border border-gray-300 rounded-md" />
              <input type="text" placeholder="Middle Name" className="p-2 border border-gray-300 rounded-md" />

              <select id="gender" name="Sex" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value=""disabled>Select Gender</option>
               <option value="">Male</option>
                <option value="">Female</option>
              </select>

              <label htmlFor="birthday" className="mt-2 text-xl">Date of Birth</label>
              <input id="birthday" type="date" placeholder="Date of Birth" className="p-2 border border-gray-300 rounded-md" />


              <input type="number" placeholder="Age" min="0" max="120" className="p-2 border border-gray-300 rounded-md" />
                
              <select id="ethnicity" name="ethnicity" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                  <option value=""disabled>Ethnicity</option>
                  <option value="">APPLAY</option>
                  <option value="">AYANGAN</option>
                  <option value="">BALANGAO </option>
                  <option value="">BONTOC </option>
                  <option value="">KALINGA</option>
                  <option value="">KARAO</option>
                </select>

              <input type="text" placeholder="province" className="p-2 border border-gray-300 rounded-md" />
              <input type="text" placeholder="Municipality" className="p-2 border border-gray-300 rounded-md" />
              <input type="text" placeholder="Baranggay" className="p-2 border border-gray-300 rounded-md" />
              
              <input type="text" placeholder="if married name of Spouse" className="p-2 border border-gray-300 rounded-md col-span-2" />
              
          </div>
        </div>

        <div className="mb-10 mt-10">
          <h2 className="text-lg font-bold mb-5">Educational Background</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">

            <select id="HighestEduc" name="HighestEduc" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value=""disabled>Educational Attainment</option>
              <option value="">Elementary Graduate</option>
              <option value="">High School Graduate</option>
              <option value="">Colloge Graduate</option>
              <option value="">Masters Graduate</option>
              <option value="">Vocational</option>
              <option value="">Diploma</option>
              <option value="">Undergraduate</option>
              <option value="">Post Graduatel</option>
              <option value="">Not Given</option>
            </select>

            <select id="CivilStatus" name="CivilStatus" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value=""disabled>Degree Obtain</option>
              <option value="">Docatoral Degree</option>
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
              
              <input type="text" placeholder="Father's Name" className="p-2 border border-gray-300 rounded-md" />


              <select id="father_ethnicity" name="ethnicity" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                  <option value=""disabled>Ethnicity</option>
                  <option value="">APPLAY</option>
                  <option value="">AYANGAN</option>
                  <option value="">BALANGAO </option>
                  <option value="">BONTOC </option>
                  <option value="">KALINGA</option>
                  <option value="">KARAO</option>
                </select>

              <input id="father_place_of_origin" type="text" placeholder="Place of Origin" className="p-2 border border-gray-300 rounded-md" />
              <div></div>



              {/* Mother's Side */}
              <div className="col-span-2">
                <h2 className="text-lg font-semibold">Mother's Side</h2>
              </div>
              
              <input type="text" placeholder="Mother's Name" className="p-2 border border-gray-300 rounded-md" />
              
              <select id="mother_ethnicity" name="ethnicity" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                  <option value=""disabled>Ethnicity</option>
                  <option value="">APPLAY</option>
                  <option value="">AYANGAN</option>
                  <option value="">BALANGAO </option>
                  <option value="">BONTOC </option>
                  <option value="">KALINGA</option>
                  <option value="">KARAO</option>
                </select>

              <input id="mother_place_of_origin" type="text" placeholder="Place of Origin" className="p-2 border border-gray-300 rounded-md" />
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

