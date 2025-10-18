import { ArrowLeftRight, Banana, ChevronDown, Mic, Plus, Send, SendHorizonal, } from 'lucide-react'
import { useContext } from 'react'
import { UserContext } from '../../context/context'
import { MarkdownHooks } from 'react-markdown'
import remarkGfm from 'remark-gfm'


const Main = () => {
  const { input, setInput, onSent, showResult, SetShowResult, resultData, loader, setLoader, lastPrompt } = useContext(UserContext)

  return (
    <>
      <div className=' w-full flex flex-col min-h-dvh '>
        <div className=' flex justify-between items-center p-4 text-gray-600'>
          <div>
            <h1 className='text-2xl font-medium '>Gemini</h1>
            <div className=' flex px-2 py-0.5 bg-gray-200 rounded-2xl font-medium mt-2 cursor-pointer'>
              <p className='text-[15px]'>2.5 Flash </p>
              <ChevronDown className=' h-4 relative top-1' />
            </div>
          </div>
          <div className='flex items-center'>
            <p className='inline px-2 py-0.5 mr-3 bg-gray-200 rounded-md'>PRO</p>
            <img src="https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg" alt="" className='w-11 h-11 rounded-full object-cover inline' />
          </div>
        </div>


        {!showResult ?
          //Gemini intro
          <div className=' flex-1 flex flex-col justify-center items-center '>
            <h1 className='text-4xl font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-5'>Hello, Ishu</h1>
            <div className='mt-4 flex flex-wrap gap-2.5 text-gray-800 '>
              <h2 className='px-5 py-2.5 bg-[#f0f4f9] inline rounded-3xl hover:bg-gray-200 cursor-pointer'>Create Image</h2>
              <h2 className='px-5 py-2.5 bg-[#f0f4f9] inline rounded-3xl hover:bg-gray-200 cursor-pointer'>Write</h2>
              <h2 className='px-5 py-2.5 bg-[#f0f4f9] inline rounded-3xl hover:bg-gray-200 cursor-pointer'>Build</h2>
              <h2 className='px-5 py-2.5 bg-[#f0f4f9] inline rounded-3xl hover:bg-gray-200 cursor-pointer'>Deep Research</h2>
              <h2 className='px-5 py-2.5 bg-[#f0f4f9] inline rounded-3xl hover:bg-gray-200 cursor-pointer'>Create video</h2>
              <h2 className='px-5 py-2.5 bg-[#f0f4f9] inline rounded-3xl hover:bg-gray-200 cursor-pointer'>Learn</h2>
            </div>
          </div>
          :
          // User given question
          <div className='flex-1 flex flex-col items-center px-4 w-full'>
            <div className='max-w-[700px] w-full h-[calc(100vh-270px)] overflow-y-auto' style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {!loader ?
                <>
                  <div className='flex justify-end mb-6'>
                    <div className='max-w-[80%] bg-blue-50 rounded-b-3xl rounded-l-3xl px-4 py-3'>
                      <p className='text-gray-800'>{lastPrompt}</p>
                    </div>
                  </div>
                  <div className="relative flex-1 gap-2 p-4 animate-pulse ">
                    <div className="flex-1 shimmer">
                      <div className="mb-1.5 h-5 w-[95%] rounded-md bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-lg"></div>
                      <div className="mb-1.5 h-5 w-[90%] rounded-md bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-lg"></div>
                      <div className="mb-1.5 h-5 w-[85%] rounded-md bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-lg"></div>
                    </div>
                  </div>
                </> :
                <>
                  {/* user promt */}
                  <div className='flex justify-end mb-6'>
                    <div className='max-w-[80%] bg-blue-50 rounded-b-3xl rounded-l-3xl px-4 py-3 select-text'>
                      <p className='text-gray-800'>{lastPrompt}</p>
                    </div>
                  </div>

                  {/* Gemini response */}
                  <div className='flex justify-start mb-6'>
                    <div className='max-w-[100%]  rounded-t-2xl rounded-r-2xl px-4 py-3'>
                      <div className='tracking-wide font-[Roboto] leading-relaxed select-text'>
                        <div>
                          {/*used fomatting of api response by react markdownhooks  */}
                          <MarkdownHooks remarkPlugins={[remarkGfm]}>
                            {resultData}
                          </MarkdownHooks>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              }
            </div>
          </div>
        }

        {/* User prompt */}
        <div className='flex justify-center px-4 mb-10 text-gray-600'>
          <div className='border-gray-300 border-2 px-2 pt-2 rounded-3xl w-full max-w-[700px] flex flex-col shadow-md'>
            <textarea
              name=""
              id=""
              className='px-6 py-1 mt-1 border-none outline-none bg-transparent resize-none w-full'
              placeholder='Ask Gemini'
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyDown={(e) => {
                // Send on Enter, allow Shift+Enter for newline
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  // avoid sending empty or whitespace-only input
                  if (input && input.trim().length > 0) {
                    onSent()
                  }
                }
              }}
            ></textarea>
            <div className='flex py-1.5 px-4 justify-between'>
              <div className='flex items-center'>
                <Plus className='mr-1 h-[20px] w-[20px] box-content p-2 rounded-full hover:bg-gray-200 cursor-pointer' />
                <div className='flex items-center box-content p-1.5 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <ArrowLeftRight className='h-[15px] w-[15px]' />
                  <p className='ml-1'>Tools</p>
                </div>
              </div>
              <div>
                {!input == '' ?
                  <SendHorizonal className='h-[20px] w-[20px] box-content p-2 rounded-full hover:bg-gray-200 cursor-pointer'
                    onClick={() => {
                      if (input && input.trim().length > 0) {
                        console.log(input)
                        onSent()
                      }
                    }}
                  /> : <Mic className='h-[20px] w-[20px] box-content p-2 rounded-full hover:bg-gray-200 cursor-pointer' />}
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Main