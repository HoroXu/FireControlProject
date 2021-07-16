import React from "react";
import telphone from "@/assets/images/telphone.png";
import fax from "@/assets/images/fax.png";
import contact from "@/assets/images/contact.png";
import mail from "@/assets/images/mail.png";
import qrImg from "@/assets/images/qrImg.png";
import office from "@/assets/images/office.png";
import './index.less'

const CompanyInfo = () => {
  return (
    <div className="company-info-container">
      <div className="company-info">
        <div className="number-area">
          <div className="free-title">全国免费咨询热线</div>
          <div className="free-number">4000-6969-66</div>
          <div className="contact-items">
            <img src={telphone} className="contact-icon" />
            <span className="contact-content">电话：025-58651887</span>
          </div>
          <div className="contact-items">
            <img src={fax} className="contact-icon" />
            <span className="contact-content">传真：025-58651687</span>
          </div>
          <div className="contact-items">
            <img src={contact} className="contact-icon" />
            <span className="contact-content">联系人：王先生</span>
          </div>
          <div className="contact-items">
            <img src={mail} className="contact-icon" />
            <span className="contact-content">邮箱：jsasdxf@163.com</span>
          </div>
        </div>
        <img className="qr-img" src={qrImg} />
        <img className="branch-office" src={office} />
      </div>
    </div>
  );
};

export default CompanyInfo;
