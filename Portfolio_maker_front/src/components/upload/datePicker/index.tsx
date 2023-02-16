import React from 'react';

const DatePicker = () => {
  return (
    <div className="w-full gap-3 flex">
      <div className="flex-1">
        <p className='font-bold'>시작일</p>
        <input
          className={`border w-full h-8 rounded-sm py-6 px-4 focus:outline-none focus:border-gray-500`}
          type="date"
          name="pname"
          onChange={(evt) => {
            const newregisterEmail = evt.target.value;
            console.log(newregisterEmail);
          }}
          required
        />
      </div>
      <div className="flex-1">
        <p className='font-bold'>종료일</p>
        <input
          className={`border w-full h-8 rounded-sm py-6 px-4 focus:outline-none focus:border-gray-500`}
          type="date"
          name="pname"
          onChange={(evt) => {
            const newregisterEmail = evt.target.value;
            console.log(newregisterEmail);
          }}
          required
        />
      </div>
    </div>
  );
};

export default DatePicker;
