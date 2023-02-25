import './App.css';

function App() {
  return (
    <div>
      <div className='bg-[#F8F9FE] fixed -mt-10 w-full h-2/6 text-[#F8F9FE]'>k</div>
    <div className='relative'>
    <div className='mx-auto w-4/5 font-inter'>
      <div className='mt-10 flex justify-between'>
        <div>
          <p className='text-3xl font-bold'>Social Media Dashboard</p>
          <p className='text-base'>Total Followers: 23,004</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='text-sm text-[#B0B1CD]'>Dark Mode</p>
          <div className='bg-gray-200 flex cursor-pointer relative w-12 h-6 rounded-full'>
          <label className=''>
            <input type="checkbox" className='sr-only peer'></input>
            <span className='cursor-pointer top-[3px] w-[38%] h-3/4 bg-white absolute rounded-full
              left-1 peer-checked:bg-[#20222F] peer-checked:left-[26px]
              transition-all duration-500'></span>
          </label>
        </div>
        </div>
      </div>
      <div className='mt-10 grid grid-cols-12 gap-12'>
        <div className='py-[22px] max-w-[250px] col-span-3 bg-[#F0F3FC] border-t-4 border-[#2A87C4] rounded-md'>
          <div>
            <div className='mb-5 flex justify-center space-x-2'>
              <i className='text-xl fa-brands fa-square-facebook text-[#1490F9] my-auto'></i>
              <p className='my-auto text-xs'>@nathanf</p>
            </div>
            <div className='flex flex-col space-y-[3px] mb-5'>
              <p className='text-center text-5xl font-bold'>1987</p>
              <p className='my-auto text-center tracking-[0.2em] text-sm text-[#B0B2C9]'>FOLLOWERS</p>
            </div>
            <div className='flex justify-center space-x-2 text-[#34887F]'>
              <i className='fa-solid fa-caret-up'></i>
              <p className='my-auto font-medium text-xs'>12 Today</p>
            </div>
          </div>
        </div>
        <div className='py-[22px] max-w-[250px] col-span-3 bg-[#F0F3FC] border-t-4 border-[#2A87C4] rounded-md'>
          <div>
            <div className='mb-5 flex justify-center space-x-2'>
              <i className='text-xl fa-brands fa-twitter text-[#1490F9] my-auto'></i>
              <p className='my-auto text-xs'>@nathanf</p>
            </div>
            <div className='flex flex-col space-y-[3px] mb-5'>
              <p className='text-center text-5xl font-bold'>1044</p>
              <p className='my-auto text-center tracking-[0.2em] text-sm text-[#B0B2C9]'>FOLLOWERS</p>
            </div>
            <div className='flex justify-center space-x-2 text-[#34887F]'>
              <i className='fa-solid fa-caret-up'></i>
              <p className='my-auto font-medium text-xs'>99 Today</p>
            </div>
          </div>
        </div>
        <div className='relative py-[22px] max-w-[250px] col-span-3 bg-[#F0F3FC] border-t-4 border-[#2A87C4] rounded-md'>
          <div>
            <div className='-top-1 rounded-sm absolute w-full h-1 bg-gradient-to-r from-[#F3BA6F] to-[#9C4470]'>
            </div>
            <div className='mb-5 flex justify-center space-x-2'>
              <i className='text-xl fa-brands fa-instagram my-auto text-transparent bg-clip-text bg-gradient-to-r from-[#F3BA6F] to-[#9C4470]'></i>
              <p className='my-auto text-xs'>@realnathanf</p>
            </div>
            <div className='flex flex-col space-y-[3px] mb-5'>
              <p className='text-center text-5xl font-bold'>11k</p>
              <p className='my-auto text-center tracking-[0.2em] text-sm text-[#B0B2C9]'>FOLLOWERS</p>
            </div>
            <div className='flex justify-center space-x-2 text-[#34887F]'>
              <i className='fa-solid fa-caret-up'></i>
              <p className='my-auto font-medium text-xs'>1099 Today</p>
            </div>
          </div>
        </div>
        <div className='py-[22px] max-w-[250px] col-span-3 bg-[#F0F3FC] border-t-4 border-[#B20934] rounded-md'>
          <div>
            <div className='mb-5 flex justify-center space-x-2'>
              <i className='text-xl fa-brands fa-youtube my-auto text-[#B20934]'></i>
              <p className='my-auto text-xs'>Nathan F</p>
            </div>
            <div className='flex flex-col space-y-[3px] mb-5'>
              <p className='text-center text-5xl font-bold'>8239</p>
              <p className='my-auto text-center tracking-[0.2em] text-sm text-[#B0B2C9]'>FOLLOWERS</p>
            </div>
            <div className='flex justify-center space-x-2 text-[#9C4852]'>
              <i className='fa-solid fa-caret-down'></i>
              <p className='my-auto font-medium text-xs'>114 Today</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <p className='text-2xl text-[#75747E] font-bold'>Overview-Today</p>
      </div>
      <div className='mt-5 grid grid-cols-12 gap-12'>
        <div className='flex flex-col justify-center py-5 max-h-[124px] max-w-[250px] col-span-3 bg-[#F0F3FC] rounded-md'>
          <div>
            <div className='mb-5 px-7 flex justify-between'>
              <p className='my-auto text-xs'>Page Views</p>
              <i className='text-xl fa-brands fa-square-facebook text-[#1490F9] my-auto'></i>
            </div>
            <div className='flex px-7 justify-between'>
              <p className='text-3xl font-bold'>87</p>
              <div className='flex space-x-1 text-[#34887F]'>
                <i className='my-auto text-xs fa-solid fa-caret-up'></i>
                <p className='my-auto font-medium text-xs'>3%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center max-h-[124px] max-w-[250px] col-span-3 bg-[#F0F3FC] rounded-md'>
          <div>
            <div className='mb-5 px-7 flex justify-between'>
              <p className='my-auto text-xs'>Likes</p>
              <i className='text-xl fa-brands fa-square-facebook text-[#1490F9] my-auto'></i>
            </div>
            <div className='flex px-7 justify-between'>
              <p className='text-3xl font-bold'>52</p>
              <div className='flex space-x-1 text-[#9C4852]'>
                <i className='my-auto text-xs fa-solid fa-caret-down'></i>
                <p className='my-auto font-medium text-xs'>3%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center py-5 max-h-[124px] max-w-[250px] col-span-3 bg-[#F0F3FC] rounded-md'>
          <div>
            <div className='mb-5 px-7 flex justify-between'>
              <p className='my-auto text-xs'>Likes</p>
              <i className='text-xl fa-brands fa-instagram my-auto text-transparent bg-clip-text bg-gradient-to-r from-[#F3BA6F] to-[#9C4470]'></i>
            </div>
            <div className='flex px-7 justify-between'>
              <p className='text-3xl font-bold'>5462</p>
              <div className='flex space-x-1 text-[#34887F]'>
                <i className='my-auto text-xs fa-solid fa-caret-up'></i>
                <p className='my-auto font-medium text-xs'>2257%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center max-h-[124px] max-w-[250px] col-span-3 bg-[#F0F3FC] rounded-md'>
          <div>
            <div className='mb-5 px-7 flex justify-between'>
              <p className='my-auto text-xs'>Profile Views</p>
              <i className='text-xl fa-brands fa-instagram my-auto text-transparent bg-clip-text bg-gradient-to-r from-[#F3BA6F] to-[#9C4470]'></i>
            </div>
            <div className='flex px-7 justify-between'>
              <p className='text-3xl font-bold'>52k</p>
              <div className='flex space-x-1 text-[#34887F]'>
                <i className='my-auto text-xs fa-solid fa-caret-up'></i>
                <p className='my-auto font-medium text-xs'>1375%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 mb-10 grid grid-cols-12 gap-12'>
        <div className='flex flex-col justify-center py-5 max-h-[124px] max-w-[250px] col-span-3 bg-[#F0F3FC] rounded-md'>
          <div>
            <div className='mb-5 px-7 flex justify-between'>
              <p className='my-auto text-xs'>Retweets</p>
              <i className='text-xl fa-brands fa-twitter text-[#1490F9] my-auto'></i>
            </div>
            <div className='flex px-7 justify-between'>
              <p className='text-3xl font-bold'>117</p>
              <div className='flex space-x-1 text-[#34887F]'>
                <i className='my-auto text-xs fa-solid fa-caret-up'></i>
                <p className='my-auto font-medium text-xs'>303%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center max-h-[124px] max-w-[250px] col-span-3 bg-[#F0F3FC] rounded-md'>
          <div>
            <div className='mb-5 px-7 flex justify-between'>
              <p className='my-auto text-xs'>Likes</p>
              <i className='text-xl fa-brands fa-twitter text-[#1490F9] my-auto'></i>
            </div>
            <div className='flex px-7 justify-between'>
              <p className='text-3xl font-bold'>507</p>
              <div className='flex space-x-1 text-[#34887F]'>
                <i className='my-auto text-xs fa-solid fa-caret-up'></i>
                <p className='my-auto font-medium text-xs'>553%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center py-5 max-h-[124px] max-w-[250px] col-span-3 bg-[#F0F3FC] rounded-md'>
          <div>
            <div className='mb-5 px-7 flex justify-between'>
              <p className='my-auto text-xs'>Likes</p>
              <i className='text-xl fa-brands fa-youtube text-[#B20934] my-auto'></i>
            </div>
            <div className='flex px-7 justify-between'>
              <p className='text-3xl font-bold'>107</p>
              <div className='flex space-x-1 text-[#9C4852]'>
                <i className='my-auto text-xs fa-solid fa-caret-down'></i>
                <p className='my-auto font-medium text-xs'>19%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center max-h-[124px] max-w-[250px] col-span-3 bg-[#F0F3FC] rounded-md'>
          <div>
            <div className='mb-5 px-7 flex justify-between'>
              <p className='my-auto text-xs'>Profile Views</p>
              <i className='text-xl fa-brands fa-youtube text-[#B20934] my-auto'></i>
            </div>
            <div className='flex px-7 justify-between'>
              <p className='text-3xl font-bold'>1407</p>
              <div className='flex space-x-1 text-[#9C4852]'>
                <i className='my-auto text-xs fa-solid fa-caret-down'></i>
                <p className='my-auto font-medium text-xs'>12%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
