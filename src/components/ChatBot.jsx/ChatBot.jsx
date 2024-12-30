import React from 'react';
import { IoSend } from "react-icons/io5";

function ChatBot() {
  return (
    <>
        <div 
            className="w-full top-24 fixed">

            {/* chat prompt */}
            <div 
                className="lg:w-4/5 mx-auto h-auto">
                <div 
                    className="w-4/5 mx-auto flex flex-col justify-center items-center">
                    <p 
                        className="text-primary text-lg lg:text-2xl font-bold">
                        Hi Peterson!
                    </p>
                    <p
                        className="text-[#555758] text-xs lg:text-sm">
                        I am your tourist AI assistant,I can help you to find out your requirement easily
                    </p>
                    <form 
                        className="w-full mt-5 flex flex-col gap-3">
                        <textarea       
                            type="text"
                            name="userInputPrompt"
                            id="user_input_prompt"
                            placeholder="your requirement here..."
                            className="w-full text-sm lg:text-lg pt-3 pl-4 pr-12 rounded-lg border-2 bg-[#f4f4f4]/[0.6] border-primary/[0.6] text-mainfont lg:font-semibold focus:ring-1  focus:ring-primary/[0.2] focus:outline-none focus:border-primary/[0.9] placeholder:text-[#949494]/[0.7]
                            placeholder:text-xs lg:placeholder:text-base resize-none">
                            
                        </textarea>

                        <div>
                            <button
                                type="submit"
                                className="text-xs lg:text-sm ring-2 ring-primary text-primary py-2 rounded-lg float-end px-4 flex justify-center items-center gap-2 font-semibold hover:bg-[#2E9B85]/[0.3]">
                                Submit
                                <IoSend 
                                    className="w-3.5 h-3.5 text-primary"/>
                            </button>
                        </div>
                    </form>
                </div>

                {/* todo: chat body 
                <div>
                    chat
                </div>*/}
            </div>
        </div>
    </>
  )
}

export default ChatBot