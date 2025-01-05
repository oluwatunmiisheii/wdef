import React from 'react';
import Image from 'next/image';

export const Values = () =>
{
  return (
    <section className='mt-14 bg-[#F5F5F5] py-10'>
      <div className='container mx-auto py-10 flex justify-center flex-col items-center'>
        <div className='text-center mb-8'>
          <h3 className='text-[#8F8F8F] font-extrabold mb-4'>
            Values
          </h3>
          <h2 className='text-[#333333] font-bold text-2xl'>What we are known for in <br /> transforming youth</h2>
        </div>

        <div className='mt-6 flex justify-between items-center gap-6'>
          <div className='w-[20%] flex items-start'>
            <Image
              src="/images/digitalAccess.png"
              alt="logo"
              width={50}
              height={40}
              className='mr-2 mt-2'
            />
            <div>
              <h3 className='text-[#333333] mb-2 font-bold text-[20px]'>Digital Access</h3>
              <p className='text-[#7B7B7B]'>Through our programs, we are building a world where.</p>
            </div>
          </div>
          <div className='w-[20%] flex items-start'>
            <Image
              src="/images/innovation.png"
              alt="logo"
              width={28}
              height={40}
              className='mr-2 mt-2'
            />
            <div>
              <h3 className='text-[#333333] mb-2 font-bold text-[20px]'>Tech Innovation</h3>
              <p className='text-[#7B7B7B]'>Through our programs, we are building a world where.</p>
            </div>
          </div>
          <div className='w-[20%] flex items-start'>
            <Image
              src="/images/futureBuilding.png"
              alt="logo"
              width={45}
              height={40}
              className='mr-2 mt-2'
            />
            <div>
              <h3 className='text-[#333333] mb-2 font-bold text-[20px]'>Future Building</h3>
              <p className='text-[#7B7B7B]'>Through our programs, we are building a world where.</p>
            </div>
          </div>
          <div className='w-[20%] flex items-start'>
            <Image
              src="/images/youthEmpowerment.png"
              alt="logo"
              width={40}
              height={40}
              className='mr-2'
            />
            <div>
              <h3 className='text-[#333333] mb-2 font-bold text-[20px]'>Youth Empowerment</h3>
              <p className='text-[#7B7B7B]'>Through our programs, we are building a world where.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
