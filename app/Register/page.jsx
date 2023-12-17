"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { ChakraProvider, Textarea, useDisclosure } from "@chakra-ui/react";
import AiFillFile from "react-icons/Ai";
import BsCloudArrowUpFill from "react-icons/Bs";
import { FaImages } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Page = () => {
    const {
      isOpen: isOpen_upload,
      onOpen: onOpen_upload,
      onClose: onClose_upload,
    } = useDisclosure();
    const [file,setfile]=useState();
    const [spinner_loading,setspinner_loading]=useState(false);
    const router=useRouter()
  return (
    <ChakraProvider>
      <div className="bg-gray-100  overflow-scroll ">
        <Modal
          isOpen={isOpen_upload}
          onClose={onClose_upload}
          isCentered
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody className="mt-4">
              <div className="flex mt-5">
                {/* left */}
                <div className="w-[50%]">
                  <div className="font-extrabold">Company Logo</div>
                  <div className="text-[#7C8493] text-sm mt-1">
                    This image will be shown publicly as company logo.
                  </div>
                </div>
                {/* right */}
                <div className="w-[75%] ml-[8vw]">
                  <div
                    className="border-dotted h-[20vh] w-[100%] border border-blue-500 mt-3 mb-3 flex flex-col justify-center items-center cursor-pointer"
                    onClick={() => {
                      const input = document.getElementById("file_input");
                      if (input) {
                        input.click();
                      }
                    }}
                  >
                    <FaImages size={20} color="blue" />
                    <div className="text-xs text-center mt-5">
                      Click to replace or drag and drop
                    </div>
                    <input
                      type="file"
                      className={"file_input "}
                      id="file_input"
                      hidden
                      onChange={(e) => {
                        // setfile_name(e.target.files[0].name);
                        setfile(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mt-5">
                {/* left */}
                <div className="w-[50%]">
                  <div className="font-extrabold">Service provider face</div>
                  <div className="text-[#7C8493] text-sm mt-1">
                    This image will not be shown publicly as company logo.
                  </div>
                </div>
                {/* right */}
                <div className="w-[75%] ml-[8vw]">
                  <div
                    className="border-dotted h-[20vh] w-[100%] border border-blue-500 mt-3 mb-3 flex flex-col justify-center items-center cursor-pointer"
                    onClick={() => {
                      const input = document.getElementById("file_input");
                      if (input) {
                        input.click();
                      }
                    }}
                  >
                    <FaImages size={20} color="blue" />
                    <div className="text-xs text-center mt-5">
                      Click to replace or drag and drop
                    </div>
                    <input
                      type="file"
                      className={"file_input "}
                      id="file_input"
                      hidden
                      onChange={(e) => {
                        // setfile_name(e.target.files[0].name);
                        setfile(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-5">
                <div
                  className="p-2 rounded-lg bg-blue-500 font-bold text-white cursor-pointer mr-[1vw]"
                  onClick={() => onClose_upload()}
                >
                  Back
                </div>
                <div
                  className="p-2 rounded-lg bg-blue-500 font-bold text-white cursor-pointer"
                  onClick={() => router.push("/Home")}
                >
                  Complete
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Navbar />
        <div className="flex justify-center mt-8">
          <div className="w-[80%] flex flex-col">
            <div>
              <div className="font-extrabold">Basic Information</div>
              <div className="text-[#7C8493] text-sm mt-1">
                This is company information that you can update anytime.
              </div>
              <hr className="mt-4 mb-4" />
            </div>
            <hr className="mt-4 mb-4" />
            <div className="flex">
              {/* left */}
              <div className="w-[35%]">
                <div className="font-extrabold">Company Details</div>
                <div className="text-[#7C8493] text-sm mt-1">
                  Introduce your company core info quickly to users by fill up
                  company details
                </div>
              </div>
              {/* right */}
              <div className="w-[75%] ml-[8vw]">
                <div className="flex flex-col">
                  <label>Company Name</label>
                  <input
                    type="text"
                    placeholder="Enter..."
                    className="p-2 rounded bg-white w-[60%] outline-none mt-1"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label>Website</label>
                  <input
                    type="text"
                    placeholder="Enter..."
                    className="p-2 rounded bg-white w-[60%] outline-none mt-1"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="Enter..."
                    className="p-2 rounded bg-white w-[60%] outline-none mt-1"
                  />
                </div>
                <div className="flex mt-4">
                  <div className="w-[28%] flex flex-col ">
                    <label>Employee</label>
                    <select
                      name="employee"
                      className="p-2 rounded bg-white w-[100%] outline-none mt-1"
                    >
                      <option value="first">Select Any</option>
                      <option value="first">1-10</option>
                      <option value="first">50-100</option>
                      <option value="first">100+</option>
                    </select>
                  </div>
                  <div className="w-[18%] flex flex-col  ml-7">
                    <label>Industry</label>
                    <select
                      name="industry"
                      className="p-2 rounded bg-white w-[100%] outline-none mt-1"
                    >
                      <option value="first">Select Any</option>
                      <option value="first">Technology</option>
                      <option value="first">Industry</option>
                      <option value="first">Farming</option>
                    </select>
                  </div>
                </div>
                <div className="flex mt-4 flex-col">
                  <div>Date Founded</div>
                  <div className="flex">
                    <div className="w-[18%] flex flex-col ">
                      <input
                        type="Number"
                        placeholder="0"
                        className="p-2 rounded bg-white w-[100%] outline-none mt-1"
                      />
                    </div>
                    <div className="w-[18%] flex flex-col ml-5">
                      <label></label>
                      <input
                        type="Number"
                        placeholder="0"
                        className="p-2 rounded bg-white w-[100%] outline-none mt-1"
                      />
                    </div>
                    <div className="w-[18%] flex flex-col ml-5">
                      <input
                        type="Number"
                        placeholder="0"
                        className="p-2 rounded bg-white w-[100%] outline-none mt-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <label>Tech Stack</label>
                  <input
                    type="text"
                    placeholder="Enter..."
                    className="p-2 rounded bg-white w-[60%] outline-none mt-1"
                  />
                </div>
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <div className="flex">
              {/* left */}
              <div className="w-[35%]">
                <div className="font-extrabold">About Company</div>
                <div className="text-[#7C8493] text-sm mt-1">
                  Brief description for your company. URLs are hyperlinked.
                </div>
              </div>
              {/* right */}
              <div className="w-[75%] ml-[8vw]">
                <div className="flex flex-col ">
                  <label>Company Name</label>
                  <div className="bg-white mt-1">
                    <Textarea
                      type="text"
                      className="border p-2 rounded outline-none bg-white h-[25vh] w-[30vw] "
                      placeholder="Enter ..."
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <div className="flex justify-end w-[60vw] mb-[5vh]">
              <div
                className="w-fit p-2 rounded bg-[#4640DE] text-white cursor-pointer"
                onClick={() => onOpen_upload()}
              >
                Continue
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Page;
