import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ChatMessageLayer from "../components/ChatMessageLayer";


const ChatMessagePage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Customers" />

        {/* ChatMessageLayer */}
        <ChatMessageLayer />


      </MasterLayout>
    </>
  );
};

export default ChatMessagePage;
